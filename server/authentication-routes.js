module.exports = function (app, cors, corsOptions, db, knex) {
  var body_parser = require('body-parser')
  var bcrypt = require('bcrypt')
  var moment = require('moment')

  // ----- middleware ----- //

  app.use(body_parser.urlencoded({ extended: false }))
  app.use(body_parser.json())

  // ----- authentication requests ----- //

  app.get('/api/v1/login', function (req, res) {
    knex('users')
      .where({ 'email': req.query.email })
      .select('hashed_password', 'user_id')
      .then(function (resp) {
        if (resp.length <= 0) {
          res.send({ nomatch: true })
        } else {
          bcrypt.compare(req.query.password, resp[0].hashed_password, function (err, respo) {
            if (err) { console.log('Login error: ', err); return }
            if (respo === true) {
              res.send({ login: true, userId: resp[0].user_id })
            } else {
              res.send({ login: false })
            }
          })
        }
      })
  })

  app.post('/api/v1/signup', function (req, res) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) { console.log('Error in genSalt: ', err); return }
      bcrypt.hash(req.body.username.password, salt, function (err, hash) {
        if (err) { console.log('Error in sign up: ', err); return }
        knex('users')
          .select('email', 'username')
          .then(function (resp) {
            var check_email = []
            for (var i = 0; i < resp.length; i++) {
              if (resp[i].email === req.body.username.email) {
                check_email = resp[i].email
              }
            }
            var check_username = []
            for (var j = 0; j < resp.length; j++) {
              if (resp[j].username === req.body.username.username) {
                check_username = resp[j].username
              }
            }
            if (check_email === req.body.username.email && check_username === req.body.username.username) {
              res.send({ err_email_username: true })
            } else if (check_email === req.body.username.email) {
              res.send({ err_email: true })
            } else if (check_username === req.body.username.username) {
              res.send({ err_username: true })
            } else {
              knex('users')
                .insert({
                  email: req.body.username.email,
                  username: req.body.username.username,
                  hashed_password: hash,
                  doa: moment().add(1, 'days'),
                  created_at: moment(),
                  updated_at: moment(),
                  profile_pic: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png'
                }).then(function (respo) {
                knex('users')
                  .where({ 'email': req.body.username.email })
                  .select('hashed_password', 'user_id')
                  .then(function (respon) {
                    res.send({ login: true, userId: respon[0].user_id })
                  })
              })
            }
          })
      })
    })
  })
}
