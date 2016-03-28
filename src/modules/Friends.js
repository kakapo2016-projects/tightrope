import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import FriendsList from '../components/friends-list'
import get from '../get-request'
import getSimple from '../get-request-simple'
import cookie from 'react-cookie'
require('../stylesheets/modules/feed.sass')

export default React.createClass({
  setInitialState: function () {
    console.log('In Friends - setInitialState')
    return {
      friends: []
    }
  },

  loadPhotosFromServer: function () {
    console.log('In Friends - loadPhotosFromServer')
    /* this should use: '/api/v1/users/:id/friends'  - the :id should be replaced by a number */
    get('http://localhost:3000/api/v1/photos/', '*', function (err, res) {
      // getSimple('http://localhost:3000/api/v1/users/1/friends', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  loadFriendsFromServer: function () {
    console.log('In Friends - loadFriendsFromServer')
    /* this should use: '/api/v1/users/:id/friends'  - the :id should be replaced by a number */
    getSimple('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/friends', function (err, res) {
      if (err) console.log('Error:', err)
      console.log('My friends are: ', res)
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentDidMount: function () {
    console.log('In Friends - componentWillMount')
    this.loadFriendsFromServer()
  },

  render: function () {
    console.log('In Friends - render')
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.friends
    }
    let displayFriends = []
    if (this.state !== null) {
      displayFriends = this.state.friends
    }
    let friendsList = [
  {
    "profile_pic": "http://www.fillmurray.com/800/800",
    "username": "surferChick64",
    "active_streak": 32,
    "badges": [
      "nilu",
      "1 year"
    ],
    "userId": 1
  },
  {
    "profile_pic": "http://www.fillmurray.com/800/800",
    "username": "madboi_ashley",
    "active_streak": 32,
    "badges": [
      "nilu",
      "1 year"
    ],
    "userId": 2
  },
  {
    "profile_pic": "http://www.fillmurray.com/800/800",
    "username": "therealelonmusk",
    "active_streak": 32,
    "badges": [
      "nilu",
      "1 year"
    ],
    "userId": 3
  },
  {
    "profile_pic": "http://www.fillmurray.com/800/800",
    "username": "howsit_howard",
    "active_streak": 32,
    "badges": [
      "nilu",
      "1 year"
    ],
    "userId": 5
  },
  {
    "profile_pic": "http://www.fillmurray.com/800/800",
    "username": "nick_attack",
    "active_streak": 32,
    "badges": [
      "nilu",
      "1 year"
    ],
    "userId": 6
  }
]

    return (
    <div>
      <h2>People you are a fan of</h2>
      <FriendsList friends={friendsList} />
    </div>
    )
  }
})
