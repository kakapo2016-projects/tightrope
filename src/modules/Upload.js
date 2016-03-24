import React from 'react'
import Profile from './Profile'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Upload a new photo</h1>
        <input type="file" class="file" name="files[]"></input>
      </div>
    )
  }
})
