var express = require('express')
var cors = require('cors')
var app = express()
var cloudinary = require('cloudinary')
var dotenv = require('dotenv')
require('dotenv').config()

dotenv.load()
cloudinary.cloudinary_js_config()
app.use(cors())

var corsOptions = {
  origin: '*'
}

  // ----- routes ----- //

require('./get-routes')(app, cors, corsOptions)
require('./post-routes')(app, cors, corsOptions)
require('./authentication-routes')(app, cors, corsOptions)

  // ----- set up DB ----- //

var knex = require('knex')({
  client: 'pg',
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

cloudinary.config({
  cloud_name: 'dvzbt8kfq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.post('/photos', cors(corsOptions), function (req, res) {
  cloudinary.uploader.upload(Object.keys(req.body)[0], function (result) {
  })
})

// listener
if (require.main === module) {
  var PORT = process.env.PORT || 3000
  app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
  })
}

module.exports = app
