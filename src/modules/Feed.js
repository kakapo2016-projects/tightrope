import React from 'react'
import Photoset from '../components/Photoset'
import request from 'superagent'
export default React.createClass({
  setInitialState: function () {
    return {

    }
  },

  componentDidMount: function () {
    request
    .get('http://localhost:3000/api/v1/users/1/profile')
    .end(function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({user: res.body})
    }.bind(this))
  },

  render: function () {
    return (
      <div>
      <h3>This is a feed</h3>
        <Photoset photoset={'Hi'} />
      </div>
    )
  }
})
