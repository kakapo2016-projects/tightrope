import React from 'react'
import request from 'superagent'
import cookie from 'react-cookie'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'
import Accolades from '../components/Accolades'
import { Col, Row, Button } from 'react-bootstrap'
import get from '../get-request'
import post from '../post-request'
require('../stylesheets/modules/profile.sass')

export default React.createClass({

  getInitialState: function () {
    return {
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

  getSortRecent: function () {
    get('http://localhost:3000/api/v2/users/' + cookie.load('userId') + '/photos/recent', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    }.bind(this))
  },

  getSortPopular: function () {
    get('http://localhost:3000/api/v2/users/' + cookie.load('userId') + '/photos/popular', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    }.bind(this))
  },

  addUploadButt: function () {
    $('.changeProfilePic').cloudinary_upload_widget(
      {
        cloud_name: 'dvzbt8kfq',
        upload_preset: 'rwy3xr9i',
        cropping: 'server',
        'folder': 'user_photos',
        theme: 'minimal',
        button_caption: '<i class="fa fa-picture-o"></i>',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      function (error, result) {
        if (error) {
          console.log('Error: ', error)
        } else {
          let profilePic = {
            profile_pic: result[0].url,
          }
          post('http://localhost:3000/api/v1/profile/' + cookie.load('userId'), profilePic, function (resp) {
          })
        }
      }
    )
  },


  componentDidMount: function () {
    this.getSortRecent()
    this.addUploadButt()
    // get('http://localhost:3000/api/v2/users/' + cookie.load('userId') + '/photos/', '', function (err, res) {
    //   if (err) console.log('Error:', err)
    //   this.setState({photos: res})
    // }.bind(this))
    // get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/profile', '', function (err, resp) {
    //   if (err) console.log('Error:', err)
    //   this.setState({profile: resp})
    // }.bind(this))
  },

  render: function () {
    let { profile_pic, username } = this.state.profile
    let { photos } = this.state
    let accolades = this.state.profile

    return (
      <div>
        <div className='sort-buttons'>
          <Button bsStyle='link' onClick={ this.getSortRecent }>Recent</Button>
          <Button bsStyle='link' onClick={ this.getSortPopular }>Popular</Button>
        </div>
        <Row>
          <Col sm={4} className='profile panel'>
            <ProfilePic profilePic={profile_pic}/>
            <span className='changeProfilePic'/>
            <h2 className='username'>{username}</h2>
            <Accolades accolades={accolades}/>
          </Col>
          <Col sm={8} className='feed centered' className='container-fluid'>
            <Photoset photoset={photos || []}/>
          </Col>
        </Row>
      </div>
    )
  }
})
