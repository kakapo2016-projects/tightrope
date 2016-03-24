
  var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: __dirname + '/../data/tightrope.sqlite'
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 10
    }
  })


  knex('users').select('*')
    .then(function (users) {
      console.log(users)
    })
