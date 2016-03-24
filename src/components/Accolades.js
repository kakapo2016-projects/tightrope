import React from 'react'

export default React.createClass({
  render: function () {
    let Accolade = ['32', '45', '1', '19']
    return (
      <div>
        <h3>Accolades</h3>
        <ul className='badges'>
          <li>img</li>
          <li>img</li>
          <li>img</li>
          <li>img</li>
        </ul>
        <div>
          <h3>Active:{this.props.active}</h3>
          <h3>Credits:{this.props.credits}</h3>
        </div>
      </div>
    )
  }
})
