import React from 'react'
import request from 'superagent'
import cookie from 'react-cookie'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'
import Accolades from '../components/Accolades'
import { Col, Row } from 'react-bootstrap'
import get from '../get-request'
require('../stylesheets/modules/profile.sass')

export default React.createClass({

  getInitialState: function () {
  return {
    photos:[],
    profile: {
      profile_pic: '',
      username: '',
      badges: [],
      credits: 0,
      active_streak: 0,
      username: ''
      }
    }
  },

  componentDidMount: function () {
    console.log('making request')
    get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/photos', '', function (err, res) {
      console.log('getting response')
      if (err) console.log('Error:', err)
      console.log('userPhotos: ', res)
      this.setState({photos: res})
    }.bind(this))
    get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/profile', '', function (err, resp) {
      console.log('getting response for profile')
      if (err) console.log('Error:', err)
      console.log('Profile: ', resp)
      this.setState({profile: resp})
      console.log('This is everything: ', this.state)
    }.bind(this))
  },

  render: function () {

    let { profile_pic, username } = this.state.profile
    let { photos }  = this.state
    let accolades = this.state.profile

    return (
      <Row>
        <Col sm={4} className='profile panel'>
          <ProfilePic profilePic={profile_pic}/>
          <h2 className='username'>{username}</h2>
          <Accolades accolades={accolades}/>
        </Col>
        <Col sm={8} className='feed centered' className='container-fluid'>
          <Photoset photoset={photos || []}/>
        </Col>
      </Row>
    )
  }
})
