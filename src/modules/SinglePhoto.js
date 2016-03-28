import React from 'react'
import Comments from '../components/Comments'
import request from 'superagent'

export default React.createClass({
  loadPhotosFromServer: function () {
    request
      .get('http://localhost:3000/api/v1/photos/' + this.props.params.photo_id, '', function (err, res) {
        if (err) console.log('Error:', err)
        this.setState({photo_url: res.body.photo_url})
      }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  render: function () {
    return (
      <div className='single-photo'>
        <img src={this.state ? this.state.photo_url : ''} />
        <Comments />
      </div>
    )
  }
})
