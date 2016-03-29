import React from 'react'
import _ from 'lodash'
import moment from 'moment'
require('../stylesheets/modules/friends')

export default React.createClass({
  render: function () {
    return (
    <div className='friends'>
      {_.map(this.props.friends, function (photo) {
        var diff = moment().diff(photo.created_at, 'days')
        return (
           <div className='panel friendPanel'>
             <img src={photo.profile_pic} className='img-responsive' />
             <div className='friendInfo'>
               <h3 className='username'>{photo.username}</h3>
               <span className='likes'>{photo.badges}</span>
               <span className='streak'>Active streak: {diff}</span>
             </div>
           </div>
         )
       })}
    </div>
    )
  }
})
