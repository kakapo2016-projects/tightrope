import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

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
  it('should render accolades', () => {
    const wrapper = shallow(<Profile />)
    expect(wrapper.find('Accolades').length).to.equal(1)
  })
  it('should render Photoset', () => {
    const wrapper = shallow(<Profile />)
    expect(wrapper.find('Photoset').length).to.equal(1)
  })
})
