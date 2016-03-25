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
          <FileInput
            name='newImage'
            accept='.png,.gif,.jpg'
            placeholder='My new photo'
            className='inputClass'
            onChange={this.handleChange} />
        </form>
      </div>
    )
  }
})
