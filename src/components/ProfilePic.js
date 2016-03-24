import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div>
        <img className="profilephoto" src={this.props.profilepic} />
      </div>
    )
  }
})
