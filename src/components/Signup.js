import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default React.createClass({
    getInitialState: function () { return { username: '', password: '', email: '' } },

  handlePassword (e) {
    console.log('handleSignupPassChange')
    this.setState({ password: e.target.value })
  },

  handleEmail (e) {
    console.log('handleSignupEmailChange')
    this.setState({ email: e.target.value })
  },

  handleUsername (e) {
    console.log('handleUsernameChange')
    this.setState({ username: e.target.value })
  },

  handleSubmit: function (e) {
    console.log('Handling sign up submit')
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
            type="email"
            label="Email Address"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <Input
            type="text"
            label="Username"
            placeholder="User Name"
            value={this.state.username}
            onChange={this.handleUsername}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <ButtonInput
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    )
  }
})
