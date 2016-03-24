
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Menu from '../../src/components/Menu'

describe('Menu', () => {
  xit('should have a div', () => {
    const wrapper = shallow(<Menu />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
