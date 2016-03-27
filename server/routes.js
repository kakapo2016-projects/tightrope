module.exports = function (app, cors, corsOptions) {
  var passport = require('passport')
  var path = require('path')
  var body_parser = require('body-parser')
  var bcrypt = require('bcrypt')

  app.use(body_parser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
  app.use(body_parser.json()) // parse application/json

  // ----- global var ----- //

  var respData = ''

  // ----- dummy data for testing ----- //

  var dummy = {
    'username': 'Simon Teg',
    'profilepic': 'http://fillmurray.com/400/400',
    'photoset': ['http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400'],
    'accolades': [{
      'credits': 10,
      'badges': ['one year', 'nine years', 'Nilu'],
      'activeStreak': 6
    }]
  }

  // ----- set up DB ----- //

  var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, '/../data/tightrope.sqlite')
    },
    useNullAsDefault: true
  })

  var db = require('./db.js')(knex)

  // ----- initial test routes ----- //

  app.get('/', function (req, res) {
    res.send('elon musk was here on /')
  })

  app.get('/test', cors(corsOptions), function (req, res) {
    res.send({user: 'You are on /test'})
  })

  app.get('/test_pass', function (req, res) {
    res.send('successfully insert to db ' + respData)
  })

  app.get('/api/v1/profile/:id', function (req, res) {
    console.log('GET received on /api/v1/profile/:id - returning some dummy data')
    res.json(dummy)
  })

  // ----- GET routes ----- //

  app.get('/api/v1/users/:id/profile', function (req, res) { // a request for one users info
    console.log('GET received on /api/v1/users/:id/profile')
    console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM users WHERE user_id=2' to sqlite DB
    db.findOne('users', { user_id: req.params.id }, function (err, user) {
      if (err) { throw err }
      var sendObj = {
        'username': user.username,
        'profilepic': user.profile_pic,
        'photoset': ['http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400', 'http://fillmurray.com/400/400'],
        'accolades': [{
          'credits': user.credits,
          'badges': [user.badge], // this needs work
          'activeStreak': user.active_streak
        }]
      }
      console.log(sendObj)
      res.json(sendObj) // returns the record for one user
    })
  })

  app.get('/api/v1/photos/:id', function (req, res) { // a request for one photo
    console.log('GET received on /api/v1/photos/:id')
    console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findOne('photos', { photo_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      console.log(photo)
      res.json(photo) // returns the record for one photo
    })
  })

  app.get('/api/v1/users/:id/photos', function (req, res) { // a request for all photos of one user
    console.log('GET received on /api/v1/users/:id/photos')
    console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findMany('photos', { user_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      console.log(photo)
      res.json(photo) // returns the record for many photo
    })
  })

  app.get('/api/v1/photos', function (req, res) { // a request for all photos from all users
    console.log('GET received on /api/v1/photos')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findMany('photos', function (err, photoSet) {
      if (err) { throw err }
      console.log(photoSet)
      res.json(photoSet) // returns the record for many photos
    })
  })

  // ----- POST routes ----- //
  // ----- test POST routes
  app.post('/login_test', function (req, res) { // this was just used for testing DB connections
    knex('tests').insert({
      username: req.body.username,
      password: req.body.password
    }).then(function (resp) {
      respData = resp
      res.redirect('/test_pass')
    })
  })

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/')
    })

  app.post('/test_signup', function (req, res) { // another test function
    console.log('POST to /test_signup')
    knex('tests').insert({
      username: req.body.username,
      password: req.body.password
    }).then(function (resp) {
      console.log(typeof resp)
      respData = resp
      res.redirect('/test_pass')
    })
  })

  app.post('/test_post', function (req, res) { // a request to post one photo
    console.log('POST received on /test_post')
    console.log('req.body is: ', req.body)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.add('tests', { username: req.body.username, password: req.body.password }, function (err, test_row) {
      if (err) { throw err }
      console.log('The newly added row has id: ', test_row)
      res.json(test_row) // returns the record for one photo
    })
  })

  // ----- real POST routes ---- //

  app.post('/api/v1/photos-old', function (req, res) { // receives a photo url as a string
    console.log('POST to /api/v1/photos')
    console.log('req.body is : ', req.body)
    knex('photos').insert({ // puts it in the DB
      external_photo_id: req.body.external_photo_id, // essential
      user_id: req.body.user_id, // essential - but coming from where?
      photo_url: req.body.photo_url, // essential
      caption: req.body.caption // optional
    }).then(function (resp) {
      console.log(typeof resp)
      // respData = resp
      // res.redirect('/test_pass')
      res.send('Posted data to photos table.The response from the DB was: ' + resp) // returns the number from the DB of the newly added record
    })
  })

  app.post('/api/v1/photos', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/photos')
    console.log('req.body is: ', req.body)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.add('photos', {
      external_photo_id: req.body.external_photo_id, // essential
      user_id: req.body.user_id, // essential - but coming from where?
      photo_url: req.body.photo_url, // essential
      caption: req.body.caption // optional
    }, function (err, resp) {
      if (err) { throw err }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
    })
  })

  app.post('/api/v1/login', function (req, res) { // receives a JSON obj containing email, username , and password
    console.log('POST to /api/v1/login')
    console.log('req.body.email is: ', req.body.email)
    console.log('req.body.username: ', req.body.username)
    console.log('req.body.password is: ', req.body.password)
    knex('users').insert({
      email: req.body.email,
      username: req.body.username,
      hashed_password: req.body.password
    }).then(function (resp) {
      console.log(typeof resp)
      // respData = resp
      // res.redirect('/test_pass')
      res.send('Posted data to users table. The response from the DB was: ' + resp)
    })
  })

  // ----- UPDATE routes ----- //
  // ----- DELETE routes ----- //

  // ----- authentication routes ----- //

  app.get('/api/v1/login', function (req, res) {
    console.log('req', req.query)
    knex('users')
      .where({'email': req.query.email})
      .select('hashed_password', 'user_id')
      .then(function (resp) {
        console.log('Fucker fucker', resp)
        if (resp.length <= 0) {
          console.log('Database cannot find user')
        } else {
          bcrypt.compare(req.query.password, resp[0].hashed_password, function (err, respo) {
            console.log('After bcrypt', respo)
            if (err) console.log('Login error: ', err)
            if (respo === true) {
              console.log('Password correct on server', resp)
              res.send({login: true, userId: resp[0].user_id})
            } else {
              console.log('Password incorrect on server')
              res.send({login: false})
            }
          })
        }
      })
  })

  app.post('/api/v1/signup', function (req, res) {
    console.log('POST to /api/v1/signup')
    console.log('req.body is : ', req.body.username)
    bcrypt.genSalt(10, function (err, salt) {
      if (err) { console.log('Error in genSalt: ', err)}
      bcrypt.hash(req.body.username.password, salt, function (err, hash) {
        if (err) { console.log('Error in sign up: ', err) }
        console.log(hash)
        // var newId = uuid.v4()
        knex('users').insert({ // puts it in the DB
          email: req.body.username.email,
          username: req.body.username.username,
          hashed_password: hash
        }).then(function (resp) {
          console.log(typeof resp)
          // respData = resp
          // res.redirect('/test_pass')
          res.send('The response from the DB was: ' + resp) // returns the number from the DB of the newly added record
        })
      })
    })
  })
}
