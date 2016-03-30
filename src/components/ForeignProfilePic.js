import React from 'react'

export default React.createClass({

  render: function () {
    let profilePic = this.props.profilePic
    return (
      <div>
        <img className='foreignprofilephoto' src={profilePic} />
      </div>
    )
  }
})
