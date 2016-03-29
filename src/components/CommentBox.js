import React from 'react'
import cookie from 'react-cookie'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import get from '../get-request-simple'
import _ from 'lodash'

export default React.createClass({

  loadCommentsFromServer: function () {
    get('http://localhost:3000/api/v1/photo/' + this.props.photoid + '/comment', function (err, res) {
      if (err) { console.log(err) }
      let commentArray = []
      for (var i = 0; i < res.length; i++) {
        commentArray.push({comment: res[i].comment, user_id: res[i].user_id})
      }
      console.log('commentarray', commentArray)
      this.setState({comments: commentArray})
    }.bind(this))
  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    console.log('commentbox', this.state)
    return (
      <div className='comment-box'>
        <CommentList comments={this.state ? this.state.comments : ''}
          />
        <CommentForm />
      </div>
    )
  }
})
// <CommentForm onCommentSubmit={this.handleCommentSubmit} />
