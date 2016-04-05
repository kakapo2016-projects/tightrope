module.exports = {
  development: {
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
  },
  // pool: {
  //   min: 2,
  //   max: 10
  // },
  directory: __dirname + '/migrations',
  tableName: 'migrations'
}
