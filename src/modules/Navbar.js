import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { Navbar, Nav } from 'react-bootstrap'


export default React.createClass({

  render: function () {
    return (
      <Navbar className='navbar navbar-static-top' >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">tightrope</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className='navbar-collapse'>
          <Nav pullRight>
            <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>
            <li><NavLink to='/profile'>profile</NavLink></li>
            <li><NavLink to='/feed'>feed</NavLink></li>
            <li><NavLink to='/friends'>friends</NavLink></li>
            <li><NavLink to='/login'>login</NavLink></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

//
// <Navbar>
//   <h1>React Router Tutorial</h1>
//   <ul role='nav'>
//     <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>
//     <li><NavLink to='/profile'>profile</NavLink></li>
//     <li><NavLink to='/feed'>feed</NavLink></li>
//     <li><NavLink to='/friends'>friends</NavLink></li>
//     <li><NavLink to='/login'>login</NavLink></li>
//   </ul>
// </Navbar>
