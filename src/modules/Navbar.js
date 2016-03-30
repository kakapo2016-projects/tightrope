require('../stylesheets/modules/upload.sass')
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'
import post from '../post-request'
import cookie from 'react-cookie'
import moment from 'moment'
import NavLink from './NavLink'
import React from 'react'

export default React.createClass({

  getInitialState () {
    return {loggedin: true}
  },

  reRunPhoto: function () {
    this.componentDidMount()
  },

  componentDidMount: function () {
    $('#upload').cloudinary_upload_widget(
      {
        cloud_name: 'dvzbt8kfq',
        upload_preset: 'rwy3xr9i',
        cropping: 'server',
        folder: 'user_photos',
        theme: 'minimal',
        button_caption: '<i class="fa fa-camera-retro fa-1x"></i>',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      (error, result) => {
        if (error) {
          console.log('Error: ', error)
        } else {
          let userUpload = {
            external_photo_id: result[0].signature,
            user_id: cookie.load('userId'),
            photo_url: result[0].url
          }
          post('http://localhost:3000/api/v1/photos', userUpload, (resp) => {
            this.props.sortFeed()
            this.props.sortProfile()
          })
        }
      }
    )
  },

  logout: function () {
    cookie.remove('userId', { path: '/' })
    cookie.remove('loggedIn', { path: '/' })
  },

  render: function () {
    return (
      <div className='navWrap'>
        <Navbar className='navbar navbar-static-top topNav' >
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/'><img className='logo' src='/images/tightrope-logo.png'/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='navbar-collapse'>
            <Nav pullRight>
              <li><Link to='/' activeClassName='active' onlyActiveOnIndex>feed</Link></li>
              { cookie.load('loggedIn') ? <li><NavLink to='/profile'>profile</NavLink></li> : <li></li> }
              { cookie.load('loggedIn') ? <li><NavLink to='/friends'>friends</NavLink></li> : <li></li> }
              { cookie.load('loggedIn') ? <li><NavLink onClick={this.logout} to='/login'>logout</NavLink></li> : <li><NavLink to='/login'>login</NavLink></li> }
              <li id='upload'></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
})
