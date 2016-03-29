import React from 'react'
import Comment from './Comment'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    console.log('commentlist', this.props)
    let comments = this.props.comments
    console.log('this.props.comments', comments)
    return (
      <div className='comment-list'>
        {_.map(comments, function (comment) {
          return <Comment comment={comment.comment}
            user_id={comment.user_id}/>
        })}
        <Comment />
      </div>
    )
  }
})
