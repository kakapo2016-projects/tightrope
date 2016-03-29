import React from 'react'
import cookie from 'react-cookie'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import get from '../get-request-simple'

export default React.createClass({

  loadCommentsFromServer: function () {
    console.log('sending request')
    get('http://localhost:3000/api/v1/photo/1/comment', function (err, res) {
      if (err) { console.log(err) }
      console.log('res comments', res.comment)

      this.setState({comments: res[1].comment})
    }.bind(this))
  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    console.log('this', this.state.comments)
    return (
      <div className='comment-box'>
        <CommentList comments={this.state.comments}/>
        <CommentForm />
      </div>
    )
  }
})

// <CommentForm onCommentSubmit={this.handleCommentSubmit} />
