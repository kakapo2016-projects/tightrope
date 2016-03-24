import React from 'react'
require('../stylesheets/modules/photo.sass')

export default React.createClass({

  render: function () {
    return (
      <div>
        <img className="photo panel" src={this.props.photo} />
      </div>
    )
  }
})
