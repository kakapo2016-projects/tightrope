import React from 'react'
import request from 'superagent'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'
import Accolades from '../components/Accolades'
import { Col, Row } from 'react-bootstrap'
require('../stylesheets/modules/profile.sass')

export default React.createClass({

  getInitialState: function () {
    return {
      user: {
        username: 'Simon',
        profilepic: 'https://www.loomio.org/assets/people/simon-a37e0b965bbadd306a29caf1dd442c0b19d4c8fabac2d3fe23bab9bdc620824e.png'
      },
      photoset: [
        '/images/squares.jpeg',
        '/images/dandelion.jpg',
        '/images/laksa.jpg',
        '/images/purple.jpg',
        '/images/city.jpg'
      ]
    }
  },

  componentWillMount: function () {
    request
    .get('http://localhost:3000/api/v1/users/1/profile')
    .end(function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
      console.log(this.state)
    }.bind(this))
  },

  render: function () {
    const {user, photoset} = this.state
    return (
      <Row>
        <Col md={4} className='profile panel'>
          <ProfilePic profilepic={user.profilepic}/>
          <h2 className='username'>{user.username}</h2>
          <div className='accolades'>
            <Accolades />
          </div>
        </Col>
        <Col md={8} className='feed'>
          <Photoset photoset={photoset}/>
        </Col>
      </Row>
    )
  }
})
