import { Col, Row, Button } from 'react-bootstrap'
import ProfilePic from '../components/ProfilePic'
import Accolades from '../components/Accolades'
require('../stylesheets/modules/profile.sass')
import Photoset from '../components/Photoset'
import post from '../post-request'
import cookie from 'react-cookie'
import get from '../get-request'
import React, { Component, PropTypes} from 'react'

class Profile extends Component {

  constructor (props) {
    super(props)

    this.state = {
      profile: {
        profile_pic: '',
        username: '',
        badges: [],
        credits: 0,
        active_streak: 0
      }
    }
  }

  addUploadButt () {
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
            profile_pic: result[0].url
          }
          post(`http://localhost:3000/api/v1/profile/${cookie.load('userId')}`, profilePic, function (resp) {
            this.getProfile()
          }.bind(this))
        }
      }.bind(this)
    )
  }

  getProfile () {
    get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/profile', '', function (err, resp) {
      if (err) { console.log('Error:', err); return }
      this.setState({profile: resp})
    }.bind(this))
  }

  componentDidMount () {
    this.addUploadButt()
    this.getProfile()
  }

  render () {

    let sorter = this.props.sorter
    let photos = this.props.photos
    let { profile_pic, username } = this.state.profile
    let accolades = this.state.profile

    return <div>
      <Row>
        <Col sm={4} className='profile panel'>
          <ProfilePic profilePic={profile_pic}/>
          <span className='changeProfilePic'/>
          <h2 className='username'>{username}</h2>
          <Accolades accolades={accolades}/>
        </Col>
        <Col sm={8} className='feed centered' className='container-fluid'>
          <div className='sort-buttons'>
            <Button bsStyle='link' onClick={ () => sorter('recent') }>Recent</Button>
            <Button bsStyle='link' onClick={ () => sorter('popular') }>Popular</Button>
          </div>
          <Photoset photoset={ photos || [] }/>
        </Col>
      </Row>
    </div>
  }
}

Profile.propTypes = {
  sorter: PropTypes.func,
  photos: PropTypes.array
}

export default Profile
