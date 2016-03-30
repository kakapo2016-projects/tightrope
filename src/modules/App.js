import { Grid } from 'react-bootstrap'
import Navbar from './Navbar'
import Profile from './Profile'
import React, { Component, PropTypes } from 'react'
import Feed from './Feed'
import get from '../get-request'
import cookie from 'react-cookie'
import url from '../../config.js'


class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      photos: [],
      profilePhotos: []
    }
  }

  sortProfile (sortType) {
    get(url + `/api/v2/users/${cookie.load('userId')}/photos/${sortType}`, '', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({profilePhotos: res})
    }.bind(this))
  }

  sortFeed (sortType) {
    get(url + `/api/v2/photos/${sortType}`, '', function (err, res) {
      if (err) { console.log('Error:', err); return }
      this.setState({photos: res})
    }.bind(this))
  }

  componentDidMount () {
    this.sortFeed('recent')
    this.sortProfile('recent')
  }

  render () {
    return <div>
      <Navbar sortFeed={this.sortFeed.bind(this, 'recent')} sortProfile={this.sortProfile.bind(this, 'recent')} />
      <Grid className='fluid-container'>{
        this.props.children.type.name === 'Feed'
          ? <Feed photos={this.state.photos} sorter={this.sortFeed.bind(this)} />
          : this.props.children.type.name === 'Profile'
          ? <Profile photos={this.state.profilePhotos} sorter={this.sortProfile.bind(this)} />
          : this.props.children }
      </Grid>
    </div>
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
