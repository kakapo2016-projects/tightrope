import React from 'react'
import get from '../get-request-simple'
import cookie fro 'react-cookie'
// import CommentList from 'CommentList'
// import CommentForm from 'CommentForm'

export default React.createClass({

  loadCommentsFromServer: function () {
    get('/api/v1/photo/' + cookie.load('userId') + '/comment', function (err, res) {
      if (err) { console.log(err)}
      console.log(res)
    })
  },
  //make a route for api/v1/comments

  componentWillMount: function () {
    this.loadCommentsFromServer()
  },

  render: function () {
    console.log(this)
    return (
      <div className="commentBox">
        <h1>Comments</h1>
      </div>
    )
  }
})

// <CommentList data={this.state.data} />
// <CommentForm onCommentSubmit={this.handleCommentSubmit} />
