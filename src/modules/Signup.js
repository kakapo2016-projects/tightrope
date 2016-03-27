import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default React.createClass({
    getInitialState: function () {
      return {
        username: '',
        password: '',
        email: ''
      }
    },

  handlePassword (e) {
    Ω('handleSignupPassChange')
    this.setState({password: e.target.value})
  },

  handleEmail (e) {
    Ω('handleSignupEmailChange')
    this.setState({email: e.target.value})
  },

  handleUsername (e) {
    Ω('handleUsernameChange')
    this.setState({username: e.target.value})
  },

  render () {
    return (
      <div className='sign-up'>
        <h2>Sign up</h2>
        <form>
          <Input type='email' label='Email Address' placeholder='Enter email' value={this.state.email} onChange={this.handleEmail} />
          <Input type='text' label='Username' placeholder='User Name' value={this.state.username} onChange={this.handleUsername} />
          <Input type='password' label='Password' placeholder='Enter password' value={this.state.password} onChange={this.handlePassword} />
          <ButtonInput value='Submit' onClick={() => {this.props.signUpRequest(
            this.state.username,
            this.state.email,
            this.state.password
          )}} />
        </form>
      </div>
    )
  }
})
