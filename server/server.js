require('babel-core/register')
var express = require('express')
var cors = require('cors')
var app = express()
var cloudinary = require('cloudinary')
var dotenv = require('dotenv')
require('dotenv').config()
var knex = require('knex')

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

var pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

app.use(knex({
  client: 'pg',
  connection: {
    host     : process.env.DBHOST,
    port     : '5432',
    database : process.env.DATABASE,
    user:     process.env.USER,
    password: process.env.PASSWORD
  },
  pool: {
    min: 0,
    max: 7
  },
  searchPath: 'public'
}))

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
var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
