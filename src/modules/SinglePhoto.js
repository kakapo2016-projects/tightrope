require('../stylesheets/modules/single-photo.sass')
import CommentBox from '../components/CommentBox'
import request from 'superagent'
import get from '../get-request-simple'
import cookie from 'react-cookie'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import React from 'react'
import post from '../post-request'

export default React.createClass({
  getInitialState: function () {
    return {
      user: [{
        username: '',
        user_id: 0
      }],
      followed: false
    }
  },

  loadPhotosFromServer: function () {
    request
      .get('http://localhost:3000/api/v1/photos/' + this.props.params.photo_id, '', function (err, res) {
        if (err) console.log('Error:', err)
        this.setState({photo_url: res.body.photo_url})
        this.getUserInfo(res.body.user_id)
      }.bind(this))
  },

  getUserInfo: function (userId) {
    get('http://localhost:3000/api/v1/users/' + userId + '/profile', function (err, res) {
      console.log('GOT FROM SERVER: ', res)
      if (err) { console.log('Error getting profile: ', err) }
      this.setState({user: res})
      this.handleFollow()
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  follow: function (e) {
    console.log(this.state.user.user_id)
    let _this = this
    post('http://localhost:3000/api/v1/' + cookie.load('userId') + '/follow',
    {liked_id: this.state.user.user_id},
    function (err, res) {
      if (err) {
        console.log('Error in follow request: ', err)
      }
      // alert('Following user')
    })
  },

  unfollow: function (e) {
    post('http://localhost:3000/api/v1/' + cookie.load('userId') + '/unfollow', {liked_id: this.state.user.user_id}, function (err, res) {
      if (err) { console.log('Error in follow request: ', err)}
      // alert('Following user')
    } )
  },

  handleFollow: function (e) {
    console.log('init handle follow')
    let _this = this
    get('http://localhost:3000/api/v1/fans/' + cookie.load('userId'), function (err, res) {
      if (err) { console.log('ERROR retriving fans'); return }
      let foundUser = false
      console.log('THIS THING', res)
      res.forEach((user) => {
        console.log('looking', _this.state.user, user.liked_id)
        if (this.state.user.user_id === user.liked_id) {
          console.log('Running')
          foundUser = true
        } else {
        }
      })
      if (foundUser) {
        console.log('user already followed')
        this.setState({followed: true})
      } else {
        console.log('user not followed')
        this.setState({followed: false})
      }
    }.bind(this))
  },

  render: function () {
    let routeID = '/user/' + this.state.user.user_id
    console.log('STATE: ', this.state.followed)
    return (
      <Row>
      <Col md={8} className='single-photo'>
        <img className='img-responsive' src={this.state ? this.state.photo_url : ''} />
      </Col>
      <Col md={4}>
        <div className='userName'>
          <Link to={routeID}>
            <div className='userPhoto'>
              <img src={this.state.user.profile_pic}/>
              <h2>{this.state.user.username}</h2>
            </div>
          </Link>
          <div className='followButton'>
            { this.state.followed ? <Button onClick={this.unfollow}>Unfollow</Button> : <Button onClick={this.follow}>Follow</Button>
            }
          </div>
        </div>
        <CommentBox photoid={this.props.params.photo_id}/>
      </Col>
      </Row>
    )
  }
})
