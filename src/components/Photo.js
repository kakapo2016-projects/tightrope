import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div className='photo panel'>
        <img src={this.props.photo} className='img-responsive thumbnail'/>
      </div>
    )
  }
})
