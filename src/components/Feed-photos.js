import React from 'react'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    console.log(this.props.feedPhotos)
    return (
      <div className='photoset'>
        {_.map(this.props.feedPhotos.photos, function (photo) {
          return (
            <div>
              <div className='panel feedPhoto'>
                <img src={photo.photo_url} className='img-responsive'/>
                <div className='feedInfo'>
                  <span className='likes'><i className="fa fa-gratipay"> {photo.likes}</i></span>
                  <span className='comments'><i className="fa fa-comments"> {photo.comments}</i></span>
                  <span className='streak'><i className="fa fa-space-shuttle"> {photo.activeStreak}</i></span>
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
