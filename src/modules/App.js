import { Grid } from 'react-bootstrap'
import Navbar from './Navbar'
import React, { Component, PropTypes } from 'react'
import Feed from './Feed'
import get from '../get-request'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  sortFeed (sortType) {
    get(`http://localhost:3000/api/v2/photos/${sortType}`, '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    }.bind(this))
  }

  componentDidMount () {
    this.sortFeed('recent')
  }

  render () {
    return <div>
      <Navbar sortFeed={this.sortFeed.bind(this, 'recent')} />
      <Grid className='fluid-container'>{
        this.props.children.type.name === 'Feed'
          ? <Feed photos={this.state.photos} sorter={this.sortFeed.bind(this)} />
          : this.props.children
      }</Grid>
    </div>
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
