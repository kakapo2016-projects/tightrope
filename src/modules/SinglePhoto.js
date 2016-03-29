import React from 'react'
import CommentBox from '../components/CommentBox'
import get from '../get-request'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
require('../stylesheets/modules/single-photo.sass')

export default React.createClass({
  getInitialState: function () {
    return {
      user: [{
        username: '',
        user_id: 0
      }]
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v1/photos/' + this.props.params.photo_id, '', function (err, res) {
      if (err) console.log('Error:', err)
      console.log('load photos from server', res)
      this.setState({photo_url: res.photo_url})
      this.getUserInfo(res.user_id)
    }.bind(this))
  },

  getUserInfo: function (userId) {
    get('http://localhost:3000/api/v1/users/' + userId + '/profile', function (err, res) {
      console.log('GOT FROM SERVER: ', res)
      if (err) {console.log('Error getting profile: ', err)}
      this.setState({user: res})
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  render: function () {
    let routeID = '/user/' + this.state.user.user_id
    return (
      <Row>
      <Col md={8} className='single-photo'>
        <img className='img-responsive' src={this.state ? this.state.photo_url : ''} />
      </Col>
      <Col md={4}>
        <Link to={routeID}>
          <div className='userName'>
            <img src={this.state.user.profile_pic}/>
            <h2>{this.state.user.username}</h2>
          </div>
        </Link>
        <CommentBox photoid={this.props.params.photo_id} />
      </Col>
      </Row>
    )
  }
})
