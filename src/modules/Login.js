import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'
import request from 'superagent'


export default React.createClass({
  getInitialState: function () {
    return {}
  },

  loginRequest: function () {
    Ω('Log in request')
    request
    .get('http://localhost:3000/api/v1/login')
    .end( function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
    }.bind(this))
  },

  handlePassChange (e) {
    Ω('handlePassChange')
    this.setState({password: e.target.value})
  },

  handleEmailChange (e) {
    Ω('handleEmailChange')
    this.setState({email: e.target.value})
  },

  handleSubmit: function(e) {
    console.log('handleSubmit')
        e.preventDefault()
        var email = this.state.email
        var password = this.state.password
        if (!email || !password) {
          return
        }
        this.loginRequest({email: email, password: password})
        this.setState({email: '', password: ''})
      },


  render () {
		return (
      <form onSubmit={this.handleSubmit}>
         <Input type="email" label="Email Address" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
         <Input type="password" label="Password" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange} />
         <ButtonInput type="submit" value="post" />
       </form>

    )
  }
})
