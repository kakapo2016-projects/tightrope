import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import { Grid } from 'react-bootstrap'

export default React.createClass({

  render () {
    return (
      <div>
        <Navbar />
        <Grid className='fluid-container'>
          {React.cloneElement(this.props.children) || <Feed/>}
        </Grid>
      </div>
    )
  }
})
