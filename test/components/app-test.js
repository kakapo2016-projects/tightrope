import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import App from '../../src/components/App'

describe('App', () => {
  it('should have a main title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('#main-title')).to.have.length(1)
  })
})
