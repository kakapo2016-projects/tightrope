
import React from 'react'
import Profile from './Profile'

export default React.createClass({

  getInitialState: function () {
    return {
      testuser: {
        username: 'Simon',
        photo: "https://www.loomio.org/assets/people/simon-a37e0b965bbadd306a29caf1dd442c0b19d4c8fabac2d3fe23bab9bdc620824e.png"
      }
    }
  },

  render: function () {
    return (
      <div>
        <h1 id="main-title">Tightrope</h1>
        <Profile testuser={this.state.testuser}/>
      </div>
    )
  }
})
