import React from 'react'
import _ from 'lodash'

export default React.createClass({

  render: function () {
    let credits = this.props.accolades.credits
    let active_streak = this.props.accolades.active_streak
    let badges = this.props.accolades.badges

    return (
      <div className='accolades'>
        <div className='badges'>
        {_.map(badges, function (badge) {
          return <span>{badge} </span>
        })}
        </div>
        <div>
          <h3>Credits: {credits}</h3>
          <h3>Active streak: {active_streak}</h3>
        </div>
      </div>
    )
  }
})
