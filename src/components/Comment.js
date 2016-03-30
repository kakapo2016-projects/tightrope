import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div className='comment'>
        <p>{this.props.username}: {this.props.comment}</p>
      </div>
    )
  }
})
