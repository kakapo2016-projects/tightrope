import FriendsList from '../components/friends-list'
import getSimple from '../get-request-simple'
require('../stylesheets/modules/feed.sass')
import cookie from 'react-cookie'
import get from '../get-request'
import React from 'react'

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
      if (err) { console.log('Error:', err); return }
      this.setState({friends: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  loadFriendsFromServer: function () {
    console.log('In Friends - loadFriendsFromServer')
    /* this should use: '/api/v1/users/:id/friends'  - the :id should be replaced by a number */
    getSimple('http://localhost:3000/api/v1/users/' + cookie.load('userId') + '/friends', function (err, res) {
      if (err) { console.log('Error:', err); return }
      console.log('My friends are: ', res)
      this.setState({friends: res})
      console.log('I SET IT', this.state)
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentDidMount: function () {
    console.log('In Friends - componentWillMount')
    this.loadFriendsFromServer()
  },

  render: function () {
    console.log('In Friends - render')
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
