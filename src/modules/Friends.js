import FriendsList from '../components/Friends-list'
import getSimple from '../get-request-simple'
require('../stylesheets/modules/feed.sass')
import cookie from 'react-cookie'
import get from '../get-request'
import React from 'react'
import url from '../../config.js'

export default React.createClass({
  setInitialState: function () {
    return {
      friends: []
    }
  },

  loadPhotosFromServer: function () {
    get(url + '/api/v1/photos/', '*', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({friends: res})
    }.bind(this))
  },

  loadFriendsFromServer: function () {
    getSimple(url + '/api/v1/users/' + cookie.load('userId') + '/friends', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({friends: res})
    }.bind(this))
  },

  componentDidMount: function () {
    this.loadFriendsFromServer()
  },

  render: function () {
    let friends = []
    if (this.state !== null) {
      friends = this.state.friends
    }
    return (
    <div>
      <FriendsList friends={friends} />
    </div>
    )
  }
})
