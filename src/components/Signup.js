import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default React.createClass({
  getInitialState: function () { return { username: '', password: '', email: '' } },

  handlePassword (e) {
    this.setState({ password: e.target.value })
  },

  handleEmail (e) {
    this.setState({ email: e.target.value })
  },

  handleUsername (e) {
    this.setState({ username: e.target.value })
  },

  handleSubmit: function (e) {
    e.preventDefault()
    var email = this.state.email
    var password = this.state.password
    var username = this.state.username
    if (!email || !password || !username) {
      return
    }
    this.props.signUpRequest({
      email: email,
      username: username,
      password: password
    })
    this.setState({ email: '', username: '', password: '' })
  },

  render () {
    return (
      <div className='sign-up'>
        <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type='email'
            label='Email Address'
            placeholder='Enter email'
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <Input
            type='text'
            label='Username'
            placeholder='User Name'
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <Input
            type='password'
            label='Password'
            placeholder='Enter password'
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <ButtonInput
            type='submit'
            value='Sign Up'
          />
        </form>
      </div>
    )
  }
})
