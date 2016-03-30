import FeedFriends from '../components/Feed-friends'
require('../stylesheets/modules/feed.sass')
import get from '../get-request'
import React from 'react'

export default React.createClass({
  setInitialState: function () {
    console.log('in Friends - setInitialState')
    return {
      friends: []
    }
  },

  loadFriendsFromServer: function () {
    console.log('in Friends - loadFriendsFromServer')
    get('localhost:3000/api/v1/users/dummyid/friends', '', function (err, res) {
      if (err) { console.log('Error:', err); return }
      console.log('Friends res is :', res)
      this.setState({friends: res})
    }.bind(this))
  },

  componentWillMount: function () {
    console.log('in Friends - componentWillMount')
    this.loadFriendsFromServer()
    setInterval(this.loadFriendsFromServer, 2000)
  },

  render: function () {
    console.log('in Friends - render')
    let displayFriends = []
    if (this.state !== null) {
      displayFriends = this.state.friends
    }
    return (
    <div>
      <h1>Friends</h1>
      <FeedFriends friends={displayFriends} />
      <p>
        You currently have no friends ...except me.
      </p>
    </div>
    )
  }
})
