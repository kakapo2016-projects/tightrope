import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import ProfilePic from '../../src/components/ProfilePic'

describe('ProfilePic', () => {
  xit('should have a profile image', () => {
    const wrapper = shallow(<ProfilePic />)
    expect(wrapper.find('.profilephoto')).to.have.length(1)
  })
})
