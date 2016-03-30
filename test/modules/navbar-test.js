import { shallow, render, mount } from 'enzyme'
import Navbar from '../../src/modules/Navbar'
import { expect } from 'chai'
import React from 'react'

describe('Navbar', () => {
  it('should have wrapper div with class of navWrap', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('.navWrap').length).to.equal(1)
  })
  it('should have 5 list items in total', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('li').length).to.equal(5)
  })
  it('should have a logo', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('img').length).to.equal(1)
  })
})
