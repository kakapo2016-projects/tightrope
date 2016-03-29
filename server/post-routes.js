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

  // ----- post requests ----- //

  app.post('/api/v1/photos', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/photos')
    console.log('req.body is: ', req.body)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.add('photos', {
      external_photo_id: req.body.external_photo_id, // essential
      user_id: req.body.user_id, // essential - but coming from where?
      photo_url: req.body.photo_url, // essential
      caption: req.body.caption // optional
    }, function (err, resp) {
      if (err) { console.log('Error: ', err) }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
      db.update('users', {user_id: req.body.user_id}, {
        doa: moment().add(1, 'days'),
        updated_at: moment()
      }, function (err, resp) {
        console.log('Updating user')
        if (err) { throw err }
        console.log('Dates added: ', resp)
      })
    })
  })

  app.post('/api/v1/profile/:id', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/profile/:id')
    console.log('req.body is: ', req.body, req.params.id)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.update('users', {user_id: req.params.id}, {
      profile_pic: req.body.profile_pic // essential
      }, function (err, resp) {
        if (err) { console.log('Error: ', err) }
        console.log('The newly added row has id: ', resp)
      }
    )
  })

  app.post('/api/v1/login', function (req, res) { // receives a JSON obj containing email, username , and password
    console.log('POST to /api/v1/login')
    console.log('req.body.email is: ', req.body.email)
    console.log('req.body.username: ', req.body.username)
    console.log('req.body.password is: ', req.body.password)
    knex('users').insert({
      email: req.body.email,
      username: req.body.username,
      hashed_password: req.body.password,
      profile_pic: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png'
    }).then(function (resp) {
      console.log(typeof resp)
      // respData = resp
      // res.redirect('/test_pass')
      res.send('Posted data to users table. The response from the DB was: ' + resp)
    })
  })

  app.post('/api/v1/:id/follow', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/:id/follow/')
    console.log('req.body is: ', req.body)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.add('fans', {
      liker_id: req.params.id, // essential - but coming from where?
      liked_id: req.body.liker_id, // essential
    }, function (err, resp) {
      if (err) { console.log('Error: ', err) }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
    })
  })


}
