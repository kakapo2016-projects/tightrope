import React from 'react'
import { browserHistory } from 'react-router'
import { ButtonInput } from 'react-bootstrap'
import get from '../get-request'
import post from '../post-request'
import cookie from 'react-cookie'
import { Col, Row } from 'react-bootstrap'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import slack from '../components/slack-delete'


export default React.createClass({
  getInitialState: function () {
    return {}
  },

  signUpRequest: function (username, email, password) {
    console.log('Log in request')
    post('http://localhost:3000/api/v1/signup', {email: email, username: username, password: password}, function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
      console.log('resbod ---------> ', res.body)
    }.bind(this))
  },

  loginRequest: function (useremail, password) {
    console.log('Login attempting')
    get('http://localhost:3000/api/v1/login', {email: useremail, password: password}, (err, res) => {
      console.log('Server resp ', res)
      if (err) console.log('Error: ', err)
      if (res === null) { alert('No response from server') }
      if (res.login === true) {
        slack(res.userId, function () {
          console.log('sucessfully logged in!')
          this.setLoginCookie(res.userId)
          browserHistory.push('/')
        }.bind(this))
      } else {
        console.log('incorrect password!')
      }
    })
  },

  setLoginCookie: function (userId) {
    this.setState({ userId })
    cookie.save('userId', userId, { path: '/' })
    cookie.save('loggedIn', true, { path: '/' })
  },

  render () {
    return (
    <Row>
      <Col sm={5}>
        <Signin loginRequest={this.loginRequest} />
      </Col>
      <Col sm={5} smOffset={2}>
        <Signup loginRequest={this.loginRequest} signUpRequest={this.signUpRequest} />
      </Col>
    </Row>
    )
  }
})
