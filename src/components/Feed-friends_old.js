import React from 'react'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    console.log('Friends Props', this.props.friends)
    return (
    <div className='friendset'>
      {_.map(this.props.friends, function (friend) {
        return (
         <div>
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
