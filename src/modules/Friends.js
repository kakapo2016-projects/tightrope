import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import FriendsList from '../components/friends-list'
import get from '../get-request'
require('../stylesheets/modules/feed.sass')

export default React.createClass({
  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v1/photos/', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  render: function () {
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.photos
    }
    return (
    <div>
      <FeedPhotos photos={displayPhotos} />
      <p>
        You currently have no friends ...except me.
      </p>
    </div>
    )
  }
})
