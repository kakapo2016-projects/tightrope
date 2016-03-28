import React from 'react'
import request from 'superagent'
// import CommentList from 'CommentList'
// import CommentForm from 'CommentForm'

export default React.createClass({

  loadCommentsFromServer: function () {
    request
      .get('http://localhost:3000/api/v1/comments/', '', function (err, res) {
        if (err) console.log('Error:', err)
      }.bind(this))
      // console.log(res)
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
