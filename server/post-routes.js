module.exports = function (app, cors, corsOptions, db, knex) {
  var body_parser = require('body-parser')
  var moment = require('moment')

  app.use(body_parser.urlencoded({ extended: false }))
  app.use(body_parser.json())

  // ----- db setup ----- //

  // var knex = require('knex')({
  //   client: 'pg',
  //   connection: {
  //     host: '127.0.0.1',
  //     database: 'tightrope_dev'
  //   }
  // })

  // var db = require('./db.js')(knex)

  // ----- post requests ----- //

  app.post('/api/v1/photos', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/photos')
    console.log('req.body is: ', req.body)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.add('photos', {
      external_photo_id: req.body.external_photo_id, // essential
      user_id: req.body.user_id, // essential
      photo_url: req.body.photo_url, // essential
      caption: ' ', // optional
      created_at: moment(),
      updated_at: moment(),
      likes: 0,
      comments: 0
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
      db.update('users', {user_id: req.body.user_id}, {
        doa: moment().add(1, 'days'),
        updated_at: moment()
      }, function (err, resp) {
        console.log('Updating user')
        if (err) { console.log('Error: ', err); return }
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
      if (err) { console.log('Error: ', err); return }
      res.send('Profile pic added')
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
      res.send('Posted data to users table. The response from the DB was: ' + resp)
    })
  })

  app.post('/api/v1/:id/follow', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/:id/follow/')
    console.log('req.body is: ', req.body, req.params.id)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.add('fans', {
      liker_id: req.params.id, // essential
      liked_id: req.body.liked_id // essential
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
    })
  })

  app.post('/api/v1/:id/unfollow', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/:id/unfollow/')
    console.log('req.body is: ', req.body.liked_id, req.params.id)
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.delete('fans', {
      liker_id: req.params.id, // essential
      liked_id: req.body.liked_id // essential
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      console.log('The newly added row has id: ', resp)
      res.json(resp) // returns the id of the newly added photo record
    })
  })

  app.post('/api/v1/photo/:id/comment', function (req, res) {
    // adds new comments to the database and displays
    knex('comments').insert({
      photo_id: req.params.id,
      user_id: req.body.userId,
      comment: req.body.comment.comment
    }).then(function (resp) {
      res.send('Posted data to comments table. The response from the DB was: ' + resp)
    })
  })
  app.post('/api/v1/delete/:id', function (req, res) { // receives a photo url as a string
    console.log('POST received on /api/v1/delete/:id')
    console.log('req.body is: ', req.params.id)
    let userId = req.params.id
    // use knex to do 'INSERT INTO photos (fields) VALUES (values)
    db.delete('fans', {
      liker_id: userId
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      res.send('Account deleted')
      console.log('fans deleted: ', resp)
    })
    db.delete('users', {
      user_id: userId
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      res.send('Account deleted')
      console.log('User deleted: ', resp)
    })
    db.delete('photos', {
      user_id: userId
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      res.send('Account deleted')
      console.log('photos deleted: ', resp)
    })
    db.delete('comments', {
      user_id: userId
    }, function (err, resp) {
      if (err) { console.log('Error: ', err); return }
      res.send('Account deleted')
      console.log('comments deleted: ', resp)
    })
  })
}
