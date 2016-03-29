import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
import { Button } from 'react-bootstrap'
import _ from 'lodash'
require('../stylesheets/modules/feed.sass')

export default React.createClass({

  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v2/photos/recent', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  getSortRecent: function () {
    get('http://localhost:3000/api/v2/photos/recent', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    }.bind(this))
  },

  getSortPopular: function () {
    get('http://localhost:3000/api/v2/photos/popular', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  componentDidMount: function () {
    this.getSortRecent()
  },

  render: function () {
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.photos
    }
    return (
      <div>
        <div className='sort-buttons'>
          <Button bsStyle='link' onClick={ this.getSortRecent }>Recent</Button>
          <Button bsStyle='link'>Highwire</Button>
          <Button bsStyle='link' onClick={ this.getSortPopular }>Popular</Button>
        </div>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
