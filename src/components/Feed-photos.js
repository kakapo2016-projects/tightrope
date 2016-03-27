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
                  <span><i className="fa fa-gratipay"> {photo.likes}</i></span>
                  <span><i className="fa fa-comments"> {photo.comments}</i></span>
                  <span><i className="fa fa-space-shuttle"> {photo.activeStreak}</i></span>
                </div>
              </div>
              <div>{photo.username}</div>
            </div>
          )
        })}
      </div>
    )
  }
})
