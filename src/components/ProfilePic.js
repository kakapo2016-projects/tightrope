import React from 'react'

export default React.createClass({

  render: function () {
    console.log('Profile Pic: ', this.props.profilepic)
    return (
      <div>
        <img className='profilephoto' src={this.props.profilepic} />
      </div>
    )
  }
})
