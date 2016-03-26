
var request = require('superagent')

module.exports = function getRequest(geturl, callback) {
	request
		.get(geturl)
		.end(function(err, res){
			callback(err, res.body)
		})
}
