import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'
import request from 'superagent'
import Ω from 'lomega'
import getRequest from '../getrequest'
import { Redirect } from 'react-router'
import { Col, Row } from 'react-bootstrap'

export default React.createClass({
  getInitialState: function () {
    return {}
  },

  attemptLogIn: function (email, password) {
    getRequest(`http://localhost:3000/api/v1/user${email}`, (err, res) => {
      if (err) { console.log('ERROR: ', err); return }
      if (res === null) { alert('you call that a valid email address, idiot?'); return }
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
      .end(function (err, res) {
        if (err) console.log('Error:', err)
        this.setState({user: res.body})
        Ω('---------> ', res.body)
      }.bind(this))
  },

  signUpRequest: function () {
    Ω('Log in request')
    request
      .post('http://localhost:3000/api/v1/signup')
      .send({email: this.state.email, username: this.state.email, password: this.state.password})
      .end(function (err, res) {
        if (err) console.log('Error:', err)
        this.setState({user: res.body})
        Ω('resbod ---------> ', res.body)
      }.bind(this))
  },

  handlePassChange(e) {
    Ω('handlePassChange')
    this.setState({password: e.target.value})
  },

  handleEmailChange(e) {
    Ω('handleEmailChange')
    this.setState({email: e.target.value})
  },

  handleUsernameChange(e) {
    Ω('handleUsernameChange')
    this.setState({username: e.target.value})
  },

  handleSignupSubmit: function (e) {
    console.log('handleSignupSubmit')
    e.preventDefault()
    var email = this.state.email
    var username = this.state.username
    var password = this.state.password
    if (!email || !password || !username) {
      return
    }
    this.signUpRequest({email: email, password: password})
    this.setState({email: '', password: '', username: ''})
  },

  handleSubmit: function (e) {
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

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <Input
          type='email'
          label='Email Address'
          placeholder='Enter email'
          value={this.state.email}
          onChange={this.handleEmailChange} />
        <Input
          type='password'
          label='Password'
          placeholder='Enter password'
          value={this.state.password}
          onChange={this.handlePassChange} />
        <ButtonInput type='submit' value='submit' />
      </form>
      <form onSubmit={this.handleSignupSubmit}>
        <Input
          type='email'
          label='Email Address'
          placeholder='Enter email'
          value={this.state.email}
          onChange={this.handleEmailChange} />
        <Input
          type='text'
          label='Username'
          placeholder='User Name'
          value={this.state.username}
          onChange={this.handleUsernameChange} />
        <Input
          type='password'
          label='Password'
          placeholder='Enter password'
          value={this.state.password}
          onChange={this.handlePassChange} />
        <ButtonInput type='submit' value='submit' />
      </form>
    </div>

      <Row>
        <Col sm={5}>
          <h2>Sign in</h2>
          <form onSubmit={this.handleSubmit}>
             <Input type='email' label='Email Address' placeholder='Enter email' value={this.state.email} onChange={this.handleEmailChange} />
             <Input type='password' label='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassChange} />
             <ButtonInput type='submit' value='Submit' />
           </form>
         </Col>
         <Col sm={5} smOffset={2}>
          <h2>Sign up</h2>
           <form onSubmit={this.handleSignupSubmit}>
              <Input type='email' label='Email Address' placeholder='Enter email' value={this.state.email} onChange={this.handleEmailChange} />
              <Input type='text' label='Username' placeholder='User Name' value={this.state.username} onChange={this.handleUsernameChange} />
              <Input type='password' label='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassChange} />
              <ButtonInput type='submit' value='Submit' />
            </form>
          </Col>
       </Row>
    )
  }
})
