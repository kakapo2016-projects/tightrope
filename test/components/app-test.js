import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import React from 'react'

import App from '../../src/modules/App'

describe('App', () => {

  xit('should render a Nav bar', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Navbar')).to.have.length(1)
  })
  xit('should have a Grid', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('Grid')).to.have.length(1)
  })
})
