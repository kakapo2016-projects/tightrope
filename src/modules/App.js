import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Grid, Row } from 'react-bootstrap'

export default React.createClass({
  render () {
    return (
      <div>
        <Navbar />
        <Grid className='fluid-container'>
          {this.props.children || <Feed/>}
        </Grid>
      </div>
    )
  }
})
