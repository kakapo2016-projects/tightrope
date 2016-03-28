import React from 'react'
import CommentBox from '../components/CommentBox'
import request from 'superagent'
import { Row, Col } from 'react-bootstrap'
require('../stylesheets/modules/single-photo.sass')

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
      
      <Row>
      <Col md={8} className='single-photo'>
        <img className='img-responsive' src={this.state ? this.state.photo_url : ''} />
      </Col>
      <Col md={4}>
        <CommentBox />
      </Col>
      </Row>
    )
  }
})
