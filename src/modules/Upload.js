import React from 'react'
import { Col } from 'react-bootstrap'
import post from '../postRequest'
require('../stylesheets/modules/upload')

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
        button_caption: '<i class="fa fa-camera-retro fa-1x"></i>',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      function (error, result) {
        let userUpload = {
          external_photo_id: result[0].signature,
          user_id: 145,
          photo_url: result[0].url,
          caption: 'This is a test'
        }
        post('http://localhost:3000/api/v1/photos', userUpload, function (resp) {
          console.log('Uploaded', resp)
        })
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
