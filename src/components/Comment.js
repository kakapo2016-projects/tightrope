import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div className='comment'>
        <h3>{this.props.user_id}</h3>
        <p>{this.props.comment}</p>
      </div>
    )
  }
})
{/*<h3>{this.props.username}</h3>*/}
