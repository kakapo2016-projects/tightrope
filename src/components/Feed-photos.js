import { Link } from 'react-router'
import moment from 'moment'
import React from 'react'
import _ from 'lodash'

const FeedPhoto = ({ photos }) => {
  return (
    <div className='photoset'>
      {
        _.map(photos, function (photo, index) {
          let { created_at, photo_id, photo_url, likes, comments, username } = photo
          var diff = moment().diff(created_at, 'days')
          let routeID = '/photos/' + photo_id
          return (
            <div key={index}>
              <Link to={routeID}>
                <div className='panel feedPhoto'>
                  <img src={photo_url} className='img-responsive'/>
                  <div className='feedInfo'>
                    <span className='likes'><i className='fa fa-star'> {likes}</i></span>
                    <span className='comments'><i className='fa fa-comment'> {comments}</i></span>
                    <span className='streak'><i className='fa fa-fire'> {diff}</i></span>
                  </div>
                </div>
              </Link>
              <div className='username'>{username}</div>
            </div>
          )
        })
      }
    </div>
  )
}
export default FeedPhoto
