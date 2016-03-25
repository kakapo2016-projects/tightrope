import React from 'react'
var FileInput = require('react-file-input')

export default React.createClass({

  handleChange: function (event) {
    this.props.uploadPhoto(event.target.files[0])
  },

  render: function () {
    return (
      <div>
        <h1>Upload a new photo</h1>
        <form >
          <input
            name="file"
            type="file"
            className="cloudinary-fileupload" data-cloudinary-field="image_id"
            onChange={this.handleChange}>
          </input>
        </form>
      </div>
    )
  }
})
