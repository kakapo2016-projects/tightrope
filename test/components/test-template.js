import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('App', () => {
  xit('should have a div', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
