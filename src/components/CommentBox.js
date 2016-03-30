import CommentList from './CommentList'
import CommentForm from './CommentForm'
import get from '../get-request-simple'
import cookie from 'react-cookie'
import request from 'superagent'
import React from 'react'
import url from '../../config.js'

export default React.createClass({

  loadCommentsFromServer: function () {
    get(url + '/api/v1/photo/' + this.props.photoid + '/comment', function (err, res) {
      if (err) { console.log(err); return }
      let commentArray = []
      for (var i = 0; i < res.length; i++) {
        commentArray.push({comment: res[i].comment, username: res[i].username})
      }
      this.setState({comments: commentArray})
    }.bind(this))
  },

  handleCommentSubmit: function (comment) {
    let comments = this.state.comments
    comment.id = Date.now()
    let newComments = comments.concat([comment])
    this.setState({comments: newComments})

    request
      .post(url + '/api/v1/photo/' + this.props.photoid + '/comment')
      .send({comment: comment, userId: cookie.load('userId')})
      .end(function (err, res) {
        if (err) {
          console.log('Error: ', err)
          this.setState({comments: comments})
        } else {
          // console.log('handlecommentsubmit', res)
        }
      })
  },

  componentDidMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    return (
      <div className='comment-box'>
        <CommentList
          comments={this.state ? this.state.comments : ''}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    )
  }
})
