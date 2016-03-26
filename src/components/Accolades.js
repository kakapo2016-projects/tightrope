import React from 'react'
import _ from 'lodash'

export default React.createClass({
  render: function () {
    Ω(this.props.accolades[0].badges)
    var accolades = this.props.accolades[0]
    return (
      <div className='accolades'>
        <div className='badges'>
          {_.map(accolades.badges, function (badge) {
            return <span>{badge} </span>
          })}
        </div>
        <div>
        <h3>Credits: {accolades.credits}</h3>
        <h3>Active streak: {accolades.activeStreak}</h3>
        </div>
      </div>
    )
  }
})
