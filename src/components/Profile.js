import React from 'react'
import Menu from './Menu'
import ProfilePic from './ProfilePic'
import Photoset from './Photoset'

export default React.createClass({
  render: function () {
    return (
      <div>
        <Menu />
        <h2 className="username">{this.props.username}</h2>
        <ProfilePic profilepic={this.props.profilepic}/>
        <Photoset photoset={this.props.photoset}/>
      </div>
    )
  }
})
