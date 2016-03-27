module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/tightrope.sqlite3'

    },
    useNullAsDefault: true
  },

  directory: __dirname + '/migrations',

  tableName: 'migrations'

}
