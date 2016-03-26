module.exports = function (app, cors, corsOptions) {
  var passport = require('passport')
  var body_parser = require('body-parser')

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
      filename: __dirname + '/../data/tightrope.sqlite'
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
    res.json(dummy)
  })

  // ----- GET routes ----- //

  app.get('/api/v1/users/:id/profile', function (req, res) {
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
      res.json(sendObj)
    })
  })

  app.get('/api/v1/photos/:id', function (req, res) {
    console.log('GET received on /api/v1/photos/:id')
    console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findOne('photos', { photo_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      console.log(photo)
      res.json(photo)
    })
  })

  // ----- POST routes ----- //
  // ----- test POST routes
  app.post('/login_test', function (req, res) {
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

  app.post('/test_signup', function (req, res) {
    `console`.log('post to /test_signup')
    knex('tests').insert({
      username: req.body.username,
      password: req.body.password
    }).then(function (resp) {
      console.log(typeof resp)
      respData = resp
      res.redirect('/test_pass')
    })
  })

  // ----- real POST routes ---- //

  app.post('/api/v1/photos', function (req, res) { // receives a photo url as a string
    console.log('POST to /api/v1/photos')
    console.log('req.body is : ', req.body)
    knex('photos').insert({ // puts it in the DB
      external_photo_id: req.body.external_photo_id,
      user_id: req.body.user_id,
      photo_url: req.body.photo_url,
      caption: req.body.caption
    }).then(function (resp) {
      console.log(typeof resp)
      // respData = resp
      // res.redirect('/test_pass')
      res.send('The response from the DB was: ' + resp) // returns the number from the DB of the newly added record
    })
  })

  // not finished yet...
  app.post('/api/v1/login', function (req, res) {
    console.log('POST to /api/v1/login')
    console.log('req.body.email is: ', req.body.email)
    console.log('req.body.username: ', req.body.username)
    console.log('req.body.password is: ', req.body.password)
    db.findOne('photos', { photo_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      console.log(photo)
      res.json(photo)
    })

    knex('users').insert({
      external_photo_id: req.body.external_photo_id,
      user_id: req.body.user_id,
      photo_url: req.body.photo_url,
      caption: req.body.caption
    }).then(function (resp) {
      console.log(typeof resp)
      // respData = resp
      // res.redirect('/test_pass')
      res.send('The response from the DB was: ' + resp)
    })
  })

  // ----- UPDATE routes ----- //
  // ----- DELETE routes ----- //

  // ----- authenication routes ----- //

  app.get('/api/v1/login', function (req, res) {
    knex('users')
      .where('email', req.query.email)
      .select('hashed_password')
      .then(function (resp) {
        console.log(resp[0].hashed_password)
        if (req.query.password === resp[0].hashed_password) {
          console.log('test1')
          res.send('password_match')
        } else {
          console.log('test2')
          res.send('password_incorrect')
        }
      })
  })
}
