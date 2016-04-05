var cors = require('cors')
var cloudinary = require('cloudinary')
var dotenv = require('dotenv')
var express = require('express')
require('dotenv').config() // is this duplicating line 3?

var app = express()

dotenv.load()
cloudinary.cloudinary_js_config()
app.use(cors())

var corsOptions = {
  origin: '*'
}

// ----- set up DB ----- //

var knex = require('knex')({
  client: 'pg',
  debug: true,
  // ssl: true,
  connection: {
    host: '127.0.0.1',
    port: '5432',
    database: 'tightrope_dev',
    // user: 'howard',
    password: 'password'
  }
})

var db = require('./db.js')(knex)

// ----- routes ----- //

require('./get-routes')(app, cors, corsOptions, db, knex)
require('./post-routes')(app, cors, corsOptions, db, knex)
require('./authentication-routes')(app, cors, corsOptions, db, knex)

// ----- middleware ----- //

app.use(require('serve-static')(__dirname + '../public'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('body-parser').json())

cloudinary.config({
  cloud_name: 'dvzbt8kfq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.post('/photos', cors(corsOptions), function (req, res) {
  cloudinary.uploader.upload(Object.keys(req.body)[0], function (result) {})
})

// ----- listener ----- //

if (require.main === module) {
  var PORT = process.env.PORT || 3000
  app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
  })
}

module.exports = app
