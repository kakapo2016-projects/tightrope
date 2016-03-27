import React from 'react'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    console.log('Friends Props from friend-list', this.props.friends)
    return (
    <div className='friendset'>
      {_.map(this.props.friends, function (friend) {
         return (
         <div>
           <div className='panel feedPhoto'>
             <img src={photo.photo_url} className='img-responsive' />
             <div className='feedInfo'>
               <span className='likes'><i className="fa fa-gratipay">{photo.likes}</i></span>
               <span className='comments'><i className="fa fa-comments">{photo.comments}</i></span>
               <span className='streak'><i className="fa fa-space-shuttle">{photo.activeStreak}</i></span>
             </div>
           </div>
           <div className='username'>
             {friend.username}
           </div>
         </div>
         )
       })}
    </div>
    )
  }
})
