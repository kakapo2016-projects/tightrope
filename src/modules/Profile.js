import React from 'react'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'
import Accolades from '../components/Accolades'
import { Col } from 'react-bootstrap'
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

  render: function () {
    return (
      <Col md={4} className='profile panel'>
        <ProfilePic profilepic={this.state.user.profilepic}/>
        <h2 className='username'>{this.state.user.username}</h2>
        <div className='accolades'>
          <Accolades />
        </div>
        <Photoset photoset={this.state.photoset}/>
      </Col>
    )
  }
})
