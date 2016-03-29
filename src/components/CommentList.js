import Comment from './Comment'
import React from 'react'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let comments = this.props.comments
    return (
      <div className='comment-list'>
        {_.map(comments, function (comment) {
          return <Comment
            comment={comment.comment}
            user_id={comment.user_id}
            />
        })}
      </div>
    )
  }
})
