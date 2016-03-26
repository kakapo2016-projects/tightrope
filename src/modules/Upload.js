import React from 'react'

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
        console.log('error and result', error, result)
      })
  },

  render: function () {
    return (
      <div>
        <a href='#' id='upload_widget_opener'></a>
      </div>
    )
  }
})
