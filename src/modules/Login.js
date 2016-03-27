import React from 'react'
import { Input, ButtonInput } from 'react-bootstrap'
import request from 'superagent'
import get from '../get-request'
import { Redirect } from 'react-router'
import { Col, Row } from 'react-bootstrap'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

export default React.createClass({
  getInitialState: function () {
    return {}
  },

  signUpRequest: function (username, email, password) {
    Ω('Log in request')
    request
    .post('http://localhost:3000/api/v1/signup')
    .send({email: email, username: username, password: password})
    .end(function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
      Ω('resbod ---------> ', res.body)
    }.bind(this))
  },

  loginRequest: function (useremail, password) {
    console.log('Login attempting')
    get('http://localhost:3000/api/v1/login', {email: useremail}, (err, res) => {
      if (err) { console.log('ERROR: ', err); return }
      if (res === null) { alert('you call that a valid email address, idiot?'); return }
      if (password === res.passwordHash) {
        alert('sucessfully logged in!')
      } else {
        alert('incorrect password!')
      }
    })
  },

  render () {
    return (
      <Row>
        <Col sm={5}>
          <Signin loginRequest={this.loginRequest} />
         </Col>
         <Col sm={5} smOffset={2}>
           <Signup signUpRequest={this.signUpRequest} />
          </Col>
       </Row>
    )
  }
})
