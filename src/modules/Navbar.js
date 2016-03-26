import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { Navbar, Nav } from 'react-bootstrap'

export default React.createClass({

  render: function () {
    return (
      <div className='navWrap'>
        <Navbar className='navbar navbar-static-top topNav' >
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'>tightrope</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='navbar-collapse'>
            <Nav pullRight>
              <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>
              <li><NavLink to='/profile'>profile</NavLink></li>
              <li><NavLink to='/friends'>friends</NavLink></li>
              <li><NavLink to='/upload'>upload</NavLink></li>
              <li><NavLink to='/login'>login</NavLink></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='subNav'>
          <Nav className='subSubNav'>
            <li>Popular</li>
            <li>High rope</li>
            <li>Newest</li>
          </Nav>
        </div>
      </div>
    )
  }
})
