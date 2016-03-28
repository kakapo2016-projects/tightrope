import React from 'react'
import Comment from './Comment'

export default React.createClass({

  render: function () {
    return (
      <div className='comment-list'>
        <Comment />
      </div>
    )
  }
})
