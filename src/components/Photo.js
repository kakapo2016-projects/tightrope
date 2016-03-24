import React from 'react'

export default React.createClass({

  render: function () {
    return (
      <div>
        <img className="photo" src={this.props.photo} />
      </div>
    )
  }
})
