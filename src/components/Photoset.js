import React from 'react'
import Photo from './Photo'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    let photos = this.props.photoset
    return (
      <div className='photoset'>
        {_.map(photos, function (photo, index) {
          return <Photo key={index} photo={photo}/>
        })}
      </div>
    )
  }
})
