import ProfilePic from '../../src/components/ProfilePic'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('ProfilePic', () => {
  it('should have a profile image', () => {
    const wrapper = shallow(<ProfilePic />)
    expect(wrapper.find('.profilephoto')).to.have.length(1)
  })
})
