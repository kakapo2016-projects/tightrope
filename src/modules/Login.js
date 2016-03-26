import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'
import request from 'superagent'
import { Redirect } from 'react-router'


export default React.createClass({
  getInitialState: function () {
    return {}
  },

  attemptLogIn: function (email, password) {
     getRequest(`http://localhost:3000/api/v1/user${email}`, (err, res) => {
       if (err) { console.log('ERROR: ', err); return }
       if (res === null) { alert('you call that a valid email address, idiot?'); return }
       /// run password through bcript
       if (password === res.passwordHash) {
         alert('sucessfully logged in!')
       } else {
         alert('incorrect password!')
       }
     })
   },


  loginRequest: function () {
    request
    .get('http://localhost:3000/api/v1/login')
    .query({email: this.state.email})
    .end( function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
        Ω('---------> ', res.body)
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
