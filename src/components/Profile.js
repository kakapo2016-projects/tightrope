import React from 'react'
import Menu from './Menu'
import ProfilePic from './ProfilePic'

export default React.createClass({

  render: function () {
    return (
      <div>
        <Menu />
        <h2 className="username">{this.props.testuser.username}</h2>
        <ProfilePic profilepic={this.props.testuser.photo}/>
      </div>
    )
  }
})


//menu
//header with name
//photo
//photoset
//profilepic
//button
//button
//button
//button
