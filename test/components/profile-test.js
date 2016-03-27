import { expect } from 'chai'
import { render, mount } from 'enzyme'
import React from 'react'
import ProfilePic from '../../src/components/ProfilePic'

import Profile from '../../src/modules/Profile'

describe('Profile', () => {
  it('should render a profile picture', () => {
    const wrapper = render(<Profile />)
    expect(wrapper.find('.profilephoto').length).to.equal(1)
  })

  it('should have a heading of Simon', () => {
    const wrapper = mount(<Profile username='Simon'/>)
    expect (wrapper.props().username).to.equal('Simon')
  })
})

//username length >1
//profilePic has slice(0, 4) === 'http'
//accolades should
