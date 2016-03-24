import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Feed from '../../src/components/Feed.js'

describe('Feed', () => {
  xit('should have a div', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('Should render the menu', () => {
    const wrapper = render(<Feed />)
    expect(wrapper.find('#menu')).to.have.length(1)
  })
})
