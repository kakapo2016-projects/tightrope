import moment from 'moment'

module.exports = function (app, cors, corsOptions) {
  var path = require('path')
  var body_parser = require('body-parser')
  var bcrypt = require('bcrypt')
  var moment = require('moment')

  app.use(body_parser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
  app.use(body_parser.json()) // parse application/json

  // ----- global var ----- //

  var respData = ''

  // ----- db setup ----- //

  var knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'tightrope_dev'
    }
  })

  var db = require('./db.js')(knex)

  // ----- get requests ----- //

  app.get('/api/v1/users/:id/profile', function (req, res) { // a request for one users info
    console.log('GET received on /api/v1/users/:id/profile')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM users WHERE user_id=2' to sqlite DB
    db.findOne('users', { user_id: req.params.id }, function (err, user) {
      if (err) { throw err }
      // console.log(user)
      res.json(user) // returns the record for one user
    })
  })

  app.get('/api/v1/photos/:id', function (req, res) { // a request for one photo
    console.log('GET received on /api/v1/photos/:id', req)
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findOne('photos', { photo_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      // console.log(photo)
      res.json(photo) // returns the record for one photo
    })
  })

  app.get('/api/v1/users/:id/photos', function (req, res) { // a request for all photos of one user
    console.log('GET received on /api/v1/users/:id/photos')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findMany('photos', { user_id: req.params.id }, function (err, photo) {
      if (err) { throw err }
      // console.log(photo)
      res.json(photo) // returns the record for many photo
    })
  })

  app.get('/api/v1/photo/:id/comment', function (req, res) { // a request for all comments of one photo
    console.log('GET received on /api/v1/photo/:id/comment')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findMany('comments', { photo_id: req.params.id }, function (err, comments) {
      if (err) { console.log('ERROR in comments', err) }
      console.log(comments)
      res.json(comments) // returns the record for many photo
    })
  })

  app.get('/api/v1/photos', function (req, res) { // a request for all photos from all users
    console.log('GET received on /api/v1/photos')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.getAll('photos', function (err, photoSet) {
      if (err) { throw err }
      // console.log('photoSet is: ', photoSet)
      res.json(photoSet) // returns the record for many photos
    })
  })

  app.get('/api/v2/photos', function (req, res) { // a request for all photos from all users
    console.log('GET received on /api/v1/photos')
    // console.log('req.params is: ', req.params)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.getPhotoStreak(function (err, resp) {
      if (err) { throw err }
      console.log(' is: ', resp)
      res.json(resp) // returns the record for many photos
    })
  })

  app.get('/api/v1/slack', function (req, res) {
    // console.log('req.query is: ', req.query.user_id)
    // use knex to do 'SELECT * FROM photos WHERE photo_id=2' to sqlite DB
    db.findOne('users', { user_id: req.query.user_id }, function (err, resp) {
      if (err) { console.log('Error in slack request: ', err) }
      console.log('Server slack response: ', resp)
      res.json(resp)
    })
  })

  app.get('/api/v1/users/:id/friends', function (req, res) { // a request for all friends of one user
    //- if user_1 is a fan of user_2 then in the fans table then this is represented as:
    // 'user_id_a=1, user_id_b=2'
    console.log('GET received on /api/v1/users/:id/friends')
    // console.log('req.params is: ', req.params.id)
    knex.raw('SELECT likers.username AS liker, likeds.* AS liked FROM users AS likers LEFT JOIN fans ON likers.user_id = fans.liker_id LEFT JOIN users AS likeds ON fans.liked_id = likeds.user_id WHERE likers.user_id =' + req.params.id + ';').then(function (resp) {
      // if (err) { console.log('Error', err)}
      console.log('friend is: ', resp)
      res.json(resp.rows) // returns the record for many friend
    })
  })
}
