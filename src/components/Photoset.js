import React from 'react'

export default React.createClass({

  render: function () {
    Ω('photoset', this.props.photoset)
    return (
      <div className="photoset">
        {this.props.photoset.map(function(note) {
          return <Photo />
        })}

      </div>
    )
  }
})
