import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { Navbar, Nav } from 'react-bootstrap'
require('../stylesheets/modules/upload.sass')

export default React.createClass({

  getInitialState () {
    return {loggedin: true}
  },

  componentDidMount: function () {
    console.log('Uploading')
    $('#upload').cloudinary_upload_widget(
      {
        cloud_name: 'dvzbt8kfq',
        upload_preset: 'rwy3xr9i',
        cropping: 'server',
        'folder': 'user_photos',
        theme: 'minimal',
        button_caption: '<i class="fa fa-camera-retro fa-1x"></i>',
        cropping_aspect_ratio: 1,
        callback: '/profile'
      },
      function (error, result) {
        let userUpload = {
          external_photo_id: result[0].signature,
          user_id: 145,
          photo_url: result[0].url,
          caption: 'This is a test'
        }
        post('http://localhost:3000/api/v1/photos', userUpload, function (resp) {
          console.log('Uploaded', resp)
        })
      }
    )
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
              <li>{this.state.loggedIn ? (
                  <NavLink to='/profile'>profile</NavLink>
                ) : (
                  <NavLink to='/login'>profile</NavLink>
                )}
                </li>
              <li><NavLink to='/friends'>friends</NavLink></li>
              <li><NavLink to='/login'>login</NavLink></li>
              <li id='upload'></li>
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
