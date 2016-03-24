module.exports = function (app) {

  // ----- dummy data for testing ----- //

  const dummy = {
    username: 'simon lenovo tegg',
    profile_pic: 'http://rack.2.mshcdn.com/media/ZgkyMDE1LzEwLzE2Lzk4L2NhdG1vdXRoLmQyOWFiLnBuZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/ee79f012/f77/cat-mouth.jpg',
    accolades: [],
    all_user_photos: []
  }

  // ----- set up DB ----- //

  var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/../data/tightrope.sqlite'
    },
    useNullAsDefault: true,
  })

  var db = require('./db.js')(knex)

  // ----- initial test routes ----- //

  app.get('/', function (req, res) {
    res.send('Hello there, whats up? Hello. Hi hi')
  })

  app.get('/test', function (req, res) {
    res.send('Test. Check...1...2...')
  })

  app.get('/api/v1/profile/:id', function (req, res) {
    res.json(dummy)
  })

  app.get('/api/v1/users/:id/profile', function (req, res) {
    console.log('GET received on /api/v1/users/:id/profile')
    console.log('>>>>>>>>>>>>>>', req.params)
    // use knex to do 'SELECT * FROM users WHERE userID=3' to sqlite DB
    db.findOne('users', { user_id: req.params.id }, function (err, user) {
      if (err) { throw err }
      console.log(user)
      res.json(user)
    })
  })

  app.get('/users/:id', function (req, res) {
    console.log('GET received on /users/:id')
    console.log('>>>>>>>>>>>>>>', req.params)
    // use knex to do 'SELECT * FROM users WHERE userID=3' to sqlite DB
    db.findOne('users', { user_id: req.params.id }, function (err, user) {
      if (err) { throw err }
      console.log(user)
      res.json(user)
    })
  })
}
