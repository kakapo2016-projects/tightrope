var request = require('superagent')

module.exports = function (url, data, callback) {
  request.post(url)
    .send(data)
    .end(function (err, res) {
      callback(err, res)
    })
}
