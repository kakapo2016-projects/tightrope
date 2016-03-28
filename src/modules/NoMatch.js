import React from 'react'

export default React.createClass({
  render: function () {
    return (
      <div>
        <p>404</p>
        <p>The page you are looking for could have been deleted or never have existed</p>
        <p>Go back <a href="/">home</a> or <a href="/login">sign up</a></p>
      </div>
    )
  }
})
