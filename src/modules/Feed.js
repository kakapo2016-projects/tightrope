import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
import { Button } from 'react-bootstrap'
require('../stylesheets/modules/feed.sass')

export default React.createClass({

  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v2/photos/', '', function (err, res) {
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
        <div className='sort-buttons'>
          <Button bsStyle='link' onClick={ console.log('You clicked Recent')}>Recent</Button>
          <Button bsStyle='link' onClick={ console.log('You clicked Highwire')}>Highwire</Button>
          <Button bsStyle='link' onClick={ console.log('You clicked Popular')}>Popular</Button>
        </div>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
