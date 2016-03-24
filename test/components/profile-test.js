
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Profile from '../../src/components/Profile'

describe('Profile', () => {
  it('should have a menu', () => {
    const wrapper = render(<Profile />)
    expect(wrapper.find('#menu')).to.have.length(1)
  })

})
