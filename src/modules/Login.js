import slack from '../components/slack-delete'
import { browserHistory } from 'react-router'
import { Col, Row } from 'react-bootstrap'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import post from '../post-request'
import cookie from 'react-cookie'
import get from '../get-request'
import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {}
  },

  signUpRequest: function (username, email, password) {
    post('http://localhost:3000/api/v1/signup', { email: email, username: username, password: password }, function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({user: res.body})
      if (res.body.err_email_username === true) {
        window.alert('email and username already taken')
      } else if (res.body.err_email === true) {
        window.alert('email already taken')
      } else if (res.body.err_username === true) {
        window.alert('username already taken')
      }
      if (res.body.login === true) {
        this.setLoginCookie(res.body.userId)
        browserHistory.push('/')
      }
    }.bind(this))
  },

  loginRequest: function (useremail, password) {
    get('http://localhost:3000/api/v1/login', { email: useremail, password: password }, (err, res) => {
      if (err) { console.log('Error: ', err); return }
      if (res === null) { window.alert('No response from server') }
      if (res.nomatch === true) { browserHistory.push('/404') }
      if (res.login === true) {
        slack(res.userId, function (res) {
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
