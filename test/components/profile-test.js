
import { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import ProfilePic from '../../src/components/ProfilePic'
global.Ω = require('lomega')

import Profile from '../../src/modules/Profile'

describe('Profile', () => {
  it('should have a profile pic', () => {
    const wrapper = mount(<Profile />)
    expect(wrapper.contains(<ProfilePic />)).to.equal(true)
  })

  it('should have a heading of Simon', () => {
    const wrapper = mount(<Profile username='Simon'/>)
    expect (wrapper.props().username).to.equal('Simon')
  })
})
