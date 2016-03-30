import Profile from '../../src/modules/Profile'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Profile', () => {
  it('should render a profile picture', () => {
    const wrapper = render(<Profile />)
    expect(wrapper.find('.profilephoto').length).to.equal(1)
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
