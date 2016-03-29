import FeedPhotos from '../components/Feed-photos'
require('../stylesheets/modules/feed.sass')
import { Button } from 'react-bootstrap'
import get from '../get-request'
import React from 'react'

export default React.createClass({

  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v2/photos/recent', '', function (err, res) {
      if (err) {console.log('Error:', err); return }
      this.setState({photos: res})
    }.bind(this))
  },

  getSortRecent: function () {
    get('http://localhost:3000/api/v2/photos/recent', '', function (err, res) {
      if (err) {console.log('Error:', err); return }
      this.setState({photos: res})
    }.bind(this))
  },
  getSortHighwire: function () {
    get('http://localhost:3000/api/v2/photos/highwire', '', function (err, res) {
      if (err) {console.log('Error:', err); return }
      this.setState({photos: res})
    }.bind(this))
  },

  getSortPopular: function () {
    get('http://localhost:3000/api/v2/photos/popular', '', function (err, res) {
      if (err) {console.log('Error:', err); return }
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
          <Button bsStyle='link' onClick={ this.getSortHighwire }>Highwire</Button>
          <Button bsStyle='link' onClick={ this.getSortPopular }>Popular</Button>
        </div>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
