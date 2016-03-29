import React from 'react'
import {ButtonInput, Input} from 'react-bootstrap'

export default React.createClass({

  render: function () {
    return (
      <div className='comment-form'>
        <form>
          <Input type='textarea' placeholder='Add a comment' />
          <ButtonInput type='submit' value='Post' />
        </form>
      </div>
    )
  }
})
