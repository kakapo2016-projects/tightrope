var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var cors = require('cors')
var app = express()
var Ω = require('lomega')
var path = require('path')
var cloudinary = require('cloudinary')
var dotenv = require('dotenv')
require('dotenv').config()

dotenv.load()
cloudinary.cloudinary_js_config()
app.use(cors())

var corsOptions = {
  origin: '*'
}

require('./routes')(app, cors, corsOptions)
// passport authentication

  // ----- set up DB ----- //

var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/../data/tightrope.sqlite'
  },
  useNullAsDefault: true
})

var db = require('./db.js')(knex)

app.use(require('serve-static')(__dirname + '../public'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

cloudinary.config({
  cloud_name: 'dvzbt8kfq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.post('/photos', cors(corsOptions), function (req, res) {
  cloudinary.uploader.upload(Object.keys(req.body)[0], function (result) {
    // console.log('result', result)
  })
})

passport.use(new LocalStrategy(
  function (email, password, done) {
    console.log('In passport')
    db.findOne ({ email: email }, function (resp) {
      console.log(resp)
      if (resp.users.hashed_password === password) {
        console.log('checking password')
        return done(null, username)
      }
      // if (err) { return done(err) }
      // if (!user) { return done(null, false) }
      // if (!user.verifyPassword(password)) { return done(null, false) }
      // return done(null, user)
    })
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  db.findById(id, function (err, user) {
    done(err, user)
  })
})

// listener
var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
