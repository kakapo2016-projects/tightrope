
import Signup from '../../src/components/Signup'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Signup', () => {
  it('should have a div with class of sign-up', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find('.sign-up').length).to.equal(1)
  })
  it('should have a header of Sign up', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find('h2').length).to.equal(1)
  })
  it('should have 4 input fields', () => {
    const wrapper = render(<Signup />)
    expect(wrapper.find('input').length).to.equal(4)
  })
})
