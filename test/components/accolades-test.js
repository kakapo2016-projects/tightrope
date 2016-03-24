
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Accolades from '../../src/components/Accolades'

describe('Accolades', () => {
  it('should have a div', () => {
    const wrapper = shallow(<Accolades />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
