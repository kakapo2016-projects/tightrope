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
    findOne: function (table, params, callback) { // params should be an object
      var key = Object.keys(params)[0]
      console.log(key, params[key])
      knex(table)
        .where(key, params[key])
        .then(function (resp) {
          callback(null, resp[0])
        })
    },

    // INSERT INTO table VALUES (...) ...
    add: function (table, params, callback) { // params should be an object
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

    // DELETE FROM table WHERE some_column=some_value
    delete: function (table, params, callback) { // params should be an object
      knex(table)
        .where(params)
        .del()
        .then(function (resp) {
          callback(null, resp[0])
        })
    },

    // UPDATE table_name SET column1=value1,column2=value2,...WHERE some_column=some_value
    update: function (table, searchParams, updateInfo, callback) { // searchParams should be an object
      knex(table)
        .where(searchParams)
        .update(updateInfo)
        .then(function (resp) {
          callback(null, resp[0])
        })
    }
  }
}
