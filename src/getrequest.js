var request = require('superagent')

module.exports = function getRequest (geturl, query ,callback) {
  request
		.get(geturl)
    .query(query)
		.end(function (err, res) {
  callback(err, res.body)
		})
}
