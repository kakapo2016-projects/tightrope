import React from 'react'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    return (
      <div className='photoset'>
        {_.map(this.props.photos, function (photo) {
          return (
            <div>
              <div className='panel feedPhoto'>
                <img src={photo.photo_url} className='img-responsive'/>
                <div className='feedInfo'>
                  <span className='likes'><i className='fa fa-star'> {photo.likes}</i></span>
                  <span className='comments'><i className='fa fa-comment'> {photo.comments}</i></span>
                  <span className='streak'><i className='fa fa-fire'> {photo.activeStreak}</i></span>
                </div>
              </div>
              <div className='username'>{photo.username}</div>
            </div>
          )
        })}
      </div>
    )
  }
})
