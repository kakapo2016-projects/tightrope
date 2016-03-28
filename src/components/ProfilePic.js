import React from 'react'

export default React.createClass({

  render: function () {
    let profilePic = this.props.profilePic
    console.log('Profile Pic: ', profilePic)
    return (
      <div>
        <img className='profilephoto' src={profilePic} />
      </div>
    )
  }
})
