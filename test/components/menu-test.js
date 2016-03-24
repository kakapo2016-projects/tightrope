
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Menu from '../../src/components/Menu'

describe('Menu', () => {
  xit('should have a ul', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.find('#menu')).to.have.length(1)
  })
  xit('should have 3 lis', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.find('li')).to.have.length(3)
  })
})
