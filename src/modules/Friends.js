import FriendsList from '../components/Friends-list'
import getSimple from '../get-request-simple'
require('../stylesheets/modules/feed.sass')
import cookie from 'react-cookie'
import get from '../get-request'
import React from 'react'

export default React.createClass({
  getInitialState: function () {
    return {
      friends: []
    }
  },

  loadPhotosFromServer: function () {
    /* this should use: '/api/v1/users/:id/friends'  - the :id should be replaced by a number */
    get('http://localhost:3000/api/v1/photos/', '*', function (err, res) {
      // getSimple('http://localhost:3000/api/v1/users/1/friends', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  loadFriendsFromServer: function () {
    /* this should use: '/api/v1/users/:id/friends'  - the :id should be replaced by a number */
    getSimple('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/friends', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentDidMount: function () {
    this.loadFriendsFromServer()
  },

  render: function () {
    let {friends} = this.props

    return (
    <div>
      <FriendsList friends={friends} />
    </div>
    )
  }
})
