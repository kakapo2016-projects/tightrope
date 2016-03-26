module.exports = function (app, cors, corsOptions) {
  var passport = require('passport')

  // ----- dummy data for testing ----- //

  const dummy = {
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

  app.get('/api/v1/profile/:id', function (req, res) {
    res.json(dummy)
  })

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
          'credits': 10,
          'badges': ['one year', 'nine years', 'Nilu'],
          'activeStreak': 6
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

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/')
    })
}
