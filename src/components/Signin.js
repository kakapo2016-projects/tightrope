import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default React.createClass({
  getInitialState: function () {
    return {
      password: '',
      email: ''
    }
  },

  handlePassChange (e) {
    console.log('handlePassChange')
    this.setState({password: e.target.value})
  },

  handleEmailChange (e) {
    console.log('handleEmailChange')
    this.setState({email: e.target.value})
  },

  handleSubmit: function (e) {
    console.log('handleSubmit')
    e.preventDefault()
    var email = this.state.email
    var password = this.state.password
    if (!email || !password) {
      return
    }
    this.props.loginRequest(email, password)
    this.setState({email: '', password: ''})
  },

  render () {
    return (
      <div id="signin-form">
        <h2>Sign in</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type='email'
            label='Email Address'
            placeholder='Enter email'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <Input
            type='password'
            label='Password'
            placeholder='Enter password'
            value={this.state.password}
            onChange={this.handlePassChange}
          />
          <ButtonInput
            type='submit'
            value='Sign In'
          />
        </form>
      </div>
    )
  }
})
