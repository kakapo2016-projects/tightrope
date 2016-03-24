import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Feed from './Feed'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role='nav'>
          <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>
          <li><NavLink to='/profile'>profile</NavLink></li>
          <li><NavLink to='/feed'>feed</NavLink></li>
          <li><NavLink to='/friends'>friends</NavLink></li>
        </ul>
        <div>
          {this.props.children || <Feed/>}
        </div>
      </div>
    )
  }
})
