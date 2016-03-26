module.exports = function (knex) {
  // these are standard SQL queries
  return {
    // SELECT * FROM table
    getAll: function (table, callback) {
      knex.select()
        .table(table)
        .then(function (resp) {
          callback(null, resp)
        })
    },

    // SELECT * FROM table WHERE ...
    findOne: function (table, params, callback) {
      var key = Object.keys(params)[0]
      console.log(key, params[key])
      knex(table)
        .where(key, params[key])
        .then(function (resp) {
          callback(null, resp[0])
        })
    },

    // INSERT INTO table VALUES (...) ...
    add: function (table, params, callback) {
      var valueString = []
      for (var i = 0; i < Object.keys(params).length; i++) {
        valueString.push(params[Object.keys(params)[i]])
      }
      valueString = valueString.join('", "')
      knex(table)
        .insert(params)
        .then(function (resp) {
          callback(null, resp[0])
        })
    },

    // delete
    delete: function (table, params, callback) {
      knex(table)
        .where(params)
        .del()
        .then(function (resp) {
          callback(null, resp[0])
        })
    },

    // update
    update: function (table, searchParams, updateInfo, callback) {
      knex(table)
        .where(searchParams)
        .update(updateInfo)
        .then(function (resp) {
          callback(null, resp[0])
        })
    }
  }
}
