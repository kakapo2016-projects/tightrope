import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Navbar from '../../src/modules/Navbar'

describe('Navbar', () => {
  it('should have wrapper div with class of navWrap', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('.navWrap')).to.have.length(1)
  })
  it('should have 8 list items in total', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('li')).to.have.length(8)
  })
  it('should have a logo', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
