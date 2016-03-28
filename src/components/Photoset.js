import React from 'react'
import Photo from './Photo'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    // console.log('PHOTOOOOOS', this.props.photoset)
    // good idea to keep prop names consistent as they pass down photoset -> photos
    let photos = this.props.photoset
    return (
      <div className='photoset'>
        {_.map(photos, function (photo) {
          return <Photo photo={photo}/>
        })}
      </div>
    )
  }
})
