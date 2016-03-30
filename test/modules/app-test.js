import { shallow, mount, render } from 'enzyme'
import App from '../../src/modules/App'
import { expect } from 'chai'
import React from 'react'

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
