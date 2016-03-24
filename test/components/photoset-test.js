
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Photoset from '../../src/components/Photoset'

describe('Photoset', () => {
  xit('should have a div', () => {
    const wrapper = shallow(<Photoset />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
