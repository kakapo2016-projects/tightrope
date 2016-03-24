
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import ProfilePic from '../../src/components/ProfilePic'

describe('ProfilePic', () => {
  it('should have a profile image', () => {
    const wrapper = shallow(<ProfilePic />)
    expect(wrapper.find('.profilephoto')).to.have.length(1)
  })
})
