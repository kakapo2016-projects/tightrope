import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import FriendsList from '../components/friends-list'
import get from '../get-request'
import getSimple from '../get-request-simple'
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
    // get('http://localhost:3000/api/v1/photos/', '*', function (err, res) {
    getSimple('http://localhost:3000/api/v1/users/1/friends', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentWillMount: function () {
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
    return (
    <div>
      <p>
        You currently have no friends ...except me.
      </p>
      <p>
        But here are some pretty photos...
      </p>
      <FeedPhotos photos={displayPhotos} />
      <p>
        Your friends would go here, but you dont have any. You still have me though. Arent computers nicer than people?
      </p>
      <FriendsList friends={displayFriends} />
    </div>
    )
  }
})
