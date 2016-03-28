import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div className='photo panel'>
        <img src={this.props.photo.photo_url} className='img-responsive thumbnail'/>
        <div className='feedInfo'>
          <span className='likes'><i className='fa fa-star'> {this.props.photo.likes}</i></span>
          <span className='comments'><i className='fa fa-comment'> {this.props.photo.comments}</i></span>
        </div>
      </div>
    )
  }
})
