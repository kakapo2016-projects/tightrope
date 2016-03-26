import React from 'react'
import { Col } from 'react-bootstrap'

export default React.createClass({
  componentDidMount: function () {
    console.log('Mouting it')
    $('#upload_widget_opener').cloudinary_upload_widget(
      {
        cloud_name: 'dvzbt8kfq',
        upload_preset: 'rwy3xr9i',
        cropping: 'server',
        'folder': 'user_photos',
        theme: 'minimal',
        button_caption: 'Upload an Image',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      function(error, result) {
        var cloudinaryId = result[0].signature
        var cloudinaryUrl = result[0].url
        var userId = 1
        console.log('error and result', cloudinaryUrl, cloudinaryUrl, userId)
      }
    )
  },

  render: function () {
    return (
      <Col sm={12}>
        <a href='#' id='upload_widget_opener'></a>
      </Col>
    )
  }
})
