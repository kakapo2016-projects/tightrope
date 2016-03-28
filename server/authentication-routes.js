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

  // ----- authentication requests ----- //

    app.get('/api/v1/login', function (req, res) {
      console.log('req', req.query)
      knex('users')
        .where({'email': req.query.email})
        .select('hashed_password', 'user_id')
        .then(function (resp) {
          console.log('Fucker fucker', resp)
          if (resp.length <= 0) {
            console.log('Database cannot find user')
            res.send({ nomatch: true })
          } else {
            bcrypt.compare(req.query.password, resp[0].hashed_password, function (err, respo) {
              console.log('After bcrypt', respo)
              if (err) console.log('Login error: ', err)
              if (respo === true) {
                console.log('Password correct on server', resp)
                res.send({ login: true, userId: resp[0].user_id })
              } else {
                console.log('Password incorrect on server')
                res.send({ login: false })
              }
            })
          }
        })
    })

    app.post('/api/v1/signup', function (req, res) {
      console.log('POST to /api/v1/signup')
      console.log('req.body is : ', req.body.username)
      bcrypt.genSalt(10, function (err, salt) {
        if (err) { console.log('Error in genSalt: ', err) }
        bcrypt.hash(req.body.username.password, salt, function (err, hash) {
          if (err) { console.log('Error in sign up: ', err) }
          console.log(hash)
          // var newId = uuid.v4()
          knex('users').insert({ // puts it in the DB
            email: req.body.username.email,
            username: req.body.username.username,
            hashed_password: hash,
            doa: moment().add(1, 'days'),
            created_at: new Date(),
            updated_at: new Date()
          }).then(function (resp) {
            console.log(typeof resp)
            // respData = resp
            // res.redirect('/test_pass')
            res.send('The response from the DB was: ' + resp) // returns the number from the DB of the newly added record
          })
        })
      })
    })

}
