import React from 'react'
import _ from 'lodash'
require('../stylesheets/modules/friends')

export default React.createClass({
  render: function () {
    return (
    <div className='friends'>
      {_.map(this.props.friends, function (photo) {
         return (
           <div className='panel friendPanel'>
             <img src={photo.profile_pic} className='img-responsive' />
             <div className='friendInfo'>
               <h3 className='username'>{photo.username}</h3>
               <span className='likes'>{photo.badges}</span>
               <span className='streak'>Active streak: {photo.active_streak}</span>
             </div>
           </div>
         )
       })}
    </div>
    )
  }
})
