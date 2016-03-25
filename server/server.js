var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var cors = require('cors')
var app = express()
var AWS = require('aws-sdk')
var socket = require('socket.io')
var http = require('http')
var Ω = require('lomega')
var ss = require('socket.io-stream')
var io = require('socket.io').listen(80)
var path = require('path')
var Busboy = require('busboy')
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

io.of('/upload').on('connection', function (socket) {
  Ω('connected to socket')
  ss(socket).on('uploadPhoto', function (stream, data) {
    var filename = path.basename(data.name)
    stream.pipe(fs.createWriteStream(filename))
  })
})
// Define s3-upload-stream with S3 credentials.
var s3Stream = require('s3-upload-stream')(new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}))

// Handle uploading file to Amazon S3.
// Uses the multipart file upload API.
// function uploadS3 (readStream, key, callback) {
//   var upload = s3Stream.upload({
//     'Bucket': '',
//     'Key': key
//   })
//   // Handle errors.
//     upload.on('error', function (err) {
//       callback(err)
//     })
//     // Handle progress.
//     upload.on('part', function (details) {
//       console.log(inspect(details))
//     })
//     // Handle upload completion.
//     upload.on('uploaded', function (details) {
//       callback()
//     })
//     // Pipe the Readable stream to the s3-upload-stream module.
//     readStream.pipe(upload)
//   }
//   router.addRoute('/images', function (req, res, params) {
//     if (req.method === 'POST') {
//       // Create an Busyboy instance passing the HTTP Request headers.
//       var busboy = new Busboy({ headers: req.headers })
//       // Listen for event when Busboy finds a file to stream.
//       busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
//         // Handle uploading file to Amazon S3.
//         // We are passing 'file' which is a ReadableStream,
//         // 'filename' which is the name of the file
//         // and a callback function to handle success/error.
//       uploadS3(file, filename, function (err) {
//         if (err) {
//           res.statusCode = 500;
//           res.end(err);
//         } else {
//           res.statusCode = 200;
//           res.end('ok');
//         }
//       })
//     })
//       // Pipe the HTTP Request into Busboy.
//       req.pipe(busboy);
//     }
//   })



// listener
var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
