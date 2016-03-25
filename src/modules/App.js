import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Grid, Row } from 'react-bootstrap'
import request from 'superagent'

var Ω = require('lomega')

export default React.createClass({

  uploadPhoto: function (file, type, id) {

    const API_ROOT = 'https://api.cloudinary.com/v1_1/dvzbt8kfq/image/upload'

    Ω(file)
    request
      .put(API_ROOT + type + '/' + id)
      .type('form')
      .send(file)
      .end(function(err, res) {
        if (err) {
          console.log(err)
        }
      console.log('res', res)
      })
  },

  render () {
    return (
      <div>
        <Navbar />
        <Grid className='fluid-container'>
          {React.cloneElement(this.props.children, {uploadPhoto: this.uploadPhoto}) || <Feed/>}
        </Grid>
      </div>
    )
  }
})
