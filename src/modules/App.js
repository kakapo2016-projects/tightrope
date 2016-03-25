import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Grid, Row } from 'react-bootstrap'
import $ from 'jquery'
import io from 'socket.io-client'
import ss from 'socket.io-stream'
var Ω = require('lomega')

const socket = io.connect('localhost:3000/photos')
let stream = ss.createStream()
let filename = 'profile.jpg'


export default React.createClass({

  uploadPhoto: function (file) {
    Ω(file)
    ss(socket).emit('uploadPhoto', stream, {name: file.name, size: file.size})
    let blobStream = ss.createBlobReadStream(file).pipe(stream)
    // calculate upload progress
    let size = 0
    blobStream.on('uploadPhoto', function(chunk) {
      size += chunk.length
      Ω(Math.floor(size / file.size * 100 + '%'))
    })
    blobStream.pipe(stream)
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
