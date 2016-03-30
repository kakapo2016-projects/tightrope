import ForeignProfile from '../../src/modules/Foreign-profile'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('ForeignProfile', () => {
  it('should render a profile picture', () => {
    const wrapper = shallow(<ForeignProfile />)
    expect(wrapper.find('ProfilePic').length).to.equal(1)
  })
  it('should render accolades', () => {
    const wrapper = shallow(<ForeignProfile />)
    expect(wrapper.find('Accolades').length).to.equal(1)
  })
  it('should render Photoset', () => {
    const wrapper = shallow(<ForeignProfile />)
    expect(wrapper.find('Photoset').length).to.equal(1)
  })
})
