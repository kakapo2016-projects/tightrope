import FeedPhotos from '../components/Feed-photos'
require('../stylesheets/modules/feed.sass')
import { Button } from 'react-bootstrap'
import React, { PropTypes } from 'react'

const Feed = ({ sorter, photos }) => {
  return <div>
    <div className='sort-buttons'>
      <Button bsStyle='link' onClick={ () => sorter('recent') }>Recent</Button>
      <Button bsStyle='link' onClick={ () => sorter('highwire') }>Highwire</Button>
      <Button bsStyle='link' onClick={ () => sorter('popular') }>Popular</Button>
    </div>
    <FeedPhotos photos={photos} />
  </div>
}

Feed.propTypes = {
  sorter: PropTypes.func,
  photos: PropTypes.array
}

export default Feed
