import React from 'react'
import _ from 'lodash'
import moment from 'moment'

export default React.createClass({
  
  render: function () {
    let credits = this.props.accolades.credits
    let activeStreak = moment().diff(this.props.accolades.created_at, 'days')
    let badges = this.props.accolades.badges

    return (
      <div className='accolades'>
        <div className='badges'>
        {
          _.map(badges, function (badge) {
            return <span>{badge}</span>
          })
        }
        </div>
        <div>
          <h3>Credits: {credits}</h3>
          <h3>Active streak: {activeStreak}</h3>
        </div>
      </div>
    )
  }
})
