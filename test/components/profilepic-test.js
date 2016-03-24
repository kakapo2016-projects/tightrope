
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProfilePic from '../../src/components/ProfilePic'

describe('ProfilePic', () => {
  xit('should have a profile image', () => {
    const wrapper = render(<Profile />)
    expect(wrapper.find('.profilephoto')).to.have.length(1)
  })
})
