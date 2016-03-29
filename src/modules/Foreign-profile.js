import ProfilePic from '../components/ProfilePic'
import Accolades from '../components/Accolades'
require('../stylesheets/modules/profile.sass')
import Photoset from '../components/Photoset'
import { Col, Row } from 'react-bootstrap'
import get from '../get-request'
import React from 'react'

export default React.createClass({

  getInitialState: function () {
    return {
      foreignId: 0,
      photos: [],
      profile: {
        profile_pic: '',
        username: '',
        badges: [],
        credits: 0,
        active_streak: 0
      }
    }
  },

  componentDidMount: function () {
    get('http://localhost:3000/api/v1/users/' + this.props.params.user_id + '/photos', '', function (err, res) {
      if (err) {console.log('Error:', err); return }
      this.setState({photos: res})
    }.bind(this))
    get('http://localhost:3000/api/v1/users/' + this.props.params.user_id + '/profile', '', function (err, resp) {
      if (err) {console.log('Error:', err); return }
      this.setState({profile: resp})
    }.bind(this))
  },

  render: function () {
    let { profile_pic, username } = this.state.profile
    let { photos } = this.state
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
