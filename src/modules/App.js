import { Grid } from 'react-bootstrap'
import Navbar from './Navbar'
import React from 'react'
import Feed from './Feed'

export default React.createClass({

  render () {
    return (
      <div>
        <Navbar />
        <Grid className='fluid-container'>
          {React.cloneElement(this.props.children) || <Feed />}
        </Grid>
      </div>
    )
  }
})
