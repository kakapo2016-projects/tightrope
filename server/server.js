var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var cors = require('cors')
var app = express()
var Ω = require('lomega')
var path = require('path')
var cloudinary = require('cloudinary')
require('dotenv').config()

app.use(cors())

var corsOptions = {
  origin: '*'
}

require('./routes')(app, cors, corsOptions)
// passport authentication

app.use(require('serve-static')(__dirname + '../public'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.post('/photos', cors(corsOptions), function (req, res) {
  console.log('req', req)
})

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err) }
      if (!user) { return done(null, false) }
      if (!user.verifyPassword(password)) { return done(null, false) }
      return done(null, user)
    })
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

// passport route

// sockets
// io.set('origins', 'http://localhost:8080')
//
// io.of('/upload').on('connection', function (socket) {
//   Ω('connected to socket')
//   ss(socket).on('uploadPhoto', function (stream, data) {
//     var filename = path.basename(data.name)
//     stream.pipe(fs.createWriteStream(filename))
//   })
// })
//
// $.cloudinary.config({ cloud_name: 'dvzbt8kfq', api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_KEY})

cloudinary.cloudinary_js_config()
// var cloudinary_cors = "http://" + request.headers.host + "/cloudinary_cors.html"

// listener
var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
