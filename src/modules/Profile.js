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
  // getInitialState: function () {
  //   return {      data: [
  //           {
  //             'photos': {
  //               'photoset': []
  //             },
  //             'profile': {
  //               'accolades': [
  //                 {
  //                   'activeStreak': 0,
  //                   'badges': [],
  //                   'credits': 0
  //                 }
  //               ],
  //               'photoset': [],
  //               'profilepic': '',
  //               'username': ''
  //             }
  //           }
  //         ]
  //       }
  // },
  //
  // componentDidMount: function () {
  //   console.log('making request')
  //   get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/photos', '', function (err, res) {
  //     console.log('getting response')
  //     if (err) console.log('Error:', err)
  //     console.log(res)
  //     this.setState({userPhotos: res})
  //     get('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/profile', '', function (err, resp) {
  //       console.log('getting response for profile')
  //       if (err) console.log('Error:', err)
  //       console.log('Profile response: ', resp)
  //       this.setState({profile: resp})
  //     }.bind(this))
  //   }.bind(this))
  // },

  render: function () {
    return (
      <Col sm={4} className='profile panel'/>
    )
  }
})

{/*<Row>
  <Col sm={4} className='profile panel'>
    <ProfilePic profilepic={this.state.data.profile}/>
    <h2 className='username'>{this.state.data.profile}</h2>
    <Accolades accolades={this.state.data.profile}/>
  </Col>
  <Col sm={8} className='feed centered' className='container-fluid'>
    <Photoset photoset={this.state.photos}/>
  </Col>
</Row>*/}
