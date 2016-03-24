
import React from 'react'
import Profile from './Profile'

export default React.createClass({

  getInitialState: function () {
    return {
      testuser: {
        username: 'Simon',
        profilepic: "https://www.loomio.org/assets/people/simon-a37e0b965bbadd306a29caf1dd442c0b19d4c8fabac2d3fe23bab9bdc620824e.png"
      },
      photoset: [
        '/images/squares.jpeg',
        '/images/dandelion.jpg',
        '/images/laksa.jpg',
        '/images/purple.jpg',
        '/images/city.jpg'
      ]
    }
  },

  render: function () {
    return (
      <div>
        <h1 id="main-title">Tightrope</h1>
        <Profile
          username={this.state.testuser.username}
          profilepic={this.state.testuser.profilepic}
          photoset={this.state.photoset}/>
      </div>
    )
  }
})
