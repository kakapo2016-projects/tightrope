import React from 'react'
import Photo from './Photo'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    return (
      <div className='photoset'>
        {_.map(this.props.photoset, function(photo) {
          return <Photo photo={photo} />
        })}
      </div>
    )
  }
})
