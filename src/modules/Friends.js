import React from 'react'
import FeedFriends from '../components/Feed-friends'
import get from '../get-request'
require('../stylesheets/modules/feed.sass')

export default React.createClass({
  setInitialState: function () {
    return {
      friends: []
    }
  },

  loadFriendsFromServer: function () {
    get('localhost:3000/api/v1/users/1/friends', '', function (err, res) {
      if (err) console.log('Error:', err)
      console.log('Friends res is :', res)
      this.setState({friends: res})
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadFriendsFromServer()
    setInterval(this.loadFriendsFromServer, 2000)
  },

  render: function () {
    let displayFriends = []
    if (this.state !== null) {
      displayFriends = this.state.friends
    }
    return (
    <div>
      <h1>Friends</h1>
      <FeedFriends friends={displayFriends} />
      <p>
        You currently have no friends.
      </p>
    </div>
    )
  }
})
