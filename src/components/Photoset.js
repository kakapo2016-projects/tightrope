import React from 'react'
import Photo from './Photo'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    // console.log('PHOTOOOOOS', this.props.photoset)
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
