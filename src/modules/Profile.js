import React from 'react'
import request from 'superagent'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'
import Accolades from '../components/Accolades'
import { Col, Row } from 'react-bootstrap'
import get from '../get-request'
require('../stylesheets/modules/profile.sass')

export default React.createClass({

  getInitialState: function () {
    return {
      user: {
        'username': '',
        'profilepic': '',
        'photoset': [''],
        'accolades': [{
          'credits': 0,
          'badges': ['hi', 'hi'],
          'activeStreak': 0
        }]
      }
    }
  },

  componentDidMount: function () {
    get('http://localhost:3000/api/v1/users/1/profile', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
    }.bind(this))
  },

  render: function () {
    const {user, photoset} = this.state
    return (
      <Row>
        <Col sm={4} className='profile panel'>
          <ProfilePic profilepic={this.state.user.profilepic}/>
          <h2 className='username'>{this.state.user.username}</h2>
          <Accolades accolades={this.state.user.accolades}/>
        </Col>
        <Col sm={8} className='feed centered' className='container-fluid'>
          <Photoset photoset={this.state.user.photoset}/>
        </Col>
      </Row>
    )
  }
})
