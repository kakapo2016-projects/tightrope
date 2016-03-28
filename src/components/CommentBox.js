import React from 'react'
import cookie from 'react-cookie'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import get from '../get-request-simple'

export default React.createClass({

  loadCommentsFromServer: function () {
    get('/api/v1/photo/' + cookie.load('userId') + '/comment', function (err, res) {
      if (err) { console.log(err) }
      console.log('res', res)
      this.setState({})
    }.bind(this))
  },
  // make a route for api/v1/comments

  componentWillMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    console.log('this', this)
    return (
      <div className='comment-box'>
        <h2>Comments:</h2>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
})

// <CommentList data={this.state.data} />
// <CommentForm onCommentSubmit={this.handleCommentSubmit} />
