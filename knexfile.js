module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'tightrope_dev'
    }
  },
  directory: __dirname + '/migrations',
  tableName: 'migrations'
}
