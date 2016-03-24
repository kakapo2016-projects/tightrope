import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import App from '../../src/components/App'

describe('App', () => {
  xit('should have a main title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#main-title')).to.have.length(1)
  })
})
