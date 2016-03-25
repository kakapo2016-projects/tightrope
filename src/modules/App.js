import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Grid, Row } from 'react-bootstrap'
import request from 'superagent'

var Ω = require('lomega')

// const socket = io.connect('https://api.cloudinary.com/v1_1/dvzbt8kfq/upload')
// let stream = ss.createStream()

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

    // ss(socket).emit('uploadPhoto', stream, {name: file.name, size: file.size})

    // let blobStream = ss.createBlobReadStream(file).pipe(stream)
    // calculate upload progress
    // let size = 0
    // blobStream.on('uploadPhoto', function (chunk) {
    //   size += chunk.length
    //   Ω(Math.floor(size / file.size * 100 + '%'))
    // })
    // blobStream.pipe(stream)
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
