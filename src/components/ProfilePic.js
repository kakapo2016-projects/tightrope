import React from 'react'

export default React.createClass({

  render: function () {
    Ω(this)
    return (
      <div>
        <img className="profilephoto" src={this.props.profilepic} />
      </div>
    )
  }
})
