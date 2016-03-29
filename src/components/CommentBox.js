import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import get from '../get-request-simple'
import cookie from 'react-cookie
import request from 'superagent'

export default React.createClass({

  loadCommentsFromServer: function () {
    get('http://localhost:3000/api/v1/photo/' + this.props.photoid + '/comment', function (err, res) {
      if (err) { console.log(err) }
      let commentArray = []
      for (var i = 0; i < res.length; i++) {
        commentArray.push({comment: res[i].comment, user_id: res[i].user_id})
      }
      this.setState({comments: commentArray})
    }.bind(this))
  },

  handleCommentSubmit: function (comment) {
    // submit to the server and refresh the list
    requests
      .post('http://localhost:3000/api/v1/photo/' + this.props.photoid + '/comment')
      .send(comment)



  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    return (
      <div className='comment-box'>
        <CommentList comments={this.state ? this.state.comments : ''} username={this.props.username}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
})
// <CommentForm onCommentSubmit={this.handleCommentSubmit} />
