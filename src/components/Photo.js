import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div className='photo panel'>
        <img src={this.props.photo.photo_url} className='img-responsive thumbnail'/>
      </div>
    )
  }
})
