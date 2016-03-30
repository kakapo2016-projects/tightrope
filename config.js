var Url = require('url')

var config ={
  development: {
    protocol: 'http:',
    slashes: true,
    hostname: 'localhost',
    port: 3000
  },
  production : {
    protocol: 'http:',
    slashes: true,
    host: 'tight-rope.herokuapp.com',
    port: process.env.PORT
  }
}

console.log("this url", Url.format(config[process.env.NODE_ENV || 'development']))

module.exports = Url.format(config[process.env.NODE_ENV || 'development'])
