import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { Navbar, Nav } from 'react-bootstrap'

export default React.createClass({

  getInitialState() {
    return {loggedin: false}
  },

  render: function () {
    return (
      <div className='navWrap'>
        <Navbar className='navbar navbar-static-top topNav' >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">tightrope</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='navbar-collapse'>
            <Nav pullRight>
              <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>

              <li>{this.state.loggedIn ? (
                  <NavLink to='/profile'>profile</NavLink>
                ) : (
                  <NavLink to='/login'>profile</NavLink>
                )}
                </li>
              <li><NavLink to='/feed'>feed</NavLink></li>
              <li><NavLink to='/friends'>friends</NavLink></li>
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
