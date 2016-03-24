import React from 'react'
import Photo from './Photo'

export default React.createClass({
  render: function () {
    return (
      <div className="photoset">
        {this.props.photoset.map(function(photo) {
          return <Photo photo={photo} />
        })}
      </div>
    )
  }
})
