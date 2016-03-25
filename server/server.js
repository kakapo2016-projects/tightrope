var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var cors = require('cors')
var app = express()
var Busboy = require('busboy')
var AWS = require('aws-sdk')
var socket = require('socket.io')
var http = require('http')
app.use(cors());

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

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne ({ username: username }, function (err, user) {
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

//sockets
var io = socket(http.Server(app))
// keeps track of all the open sockets
var sockets = {}

io.on('connection', function (socket) {
  var uniqueId = _.random(0, 100000000)
  app.socket[uniqueId] = socket
  socket.emit('id', uniqueId)
})

// Set up upload route
app.post('/upload', function (req, res) {
  AWS.config.update({
    appKey: '',
    jsKey: '',
  })
  var s3 = new AWS.S3()

  var busboy = new Busboy({
    headers: req.headers
  })

  busboy.on('file', function(fieldname, file, filename) {
    s3.upload({
      Bucket: 'bucketname',
      Key: new Date().getTime() + filename,
      Body: file //stream
    }, function(err, file){
      res.json({
        success: true
      })
    }).on('httpUploadProgress', function(evt) {
      // emit progress
      sockets[req.query.socketId].emit('uploadProgress', evt);
    })
  })

  req.pipe(busboy)
})

// listener
var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
