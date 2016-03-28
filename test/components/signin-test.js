
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Signin from '../../src/components/Signin'

describe('Signin', () => {
  it('should have a div with id of signin-form', () => {
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('#signin-form').length).to.equal(1)
  })
  it('should have a header of Sign in', () => {
    const wrapper = shallow(<Signin />)
    expect(wrapper.find('h2').length).to.equal(1)
  })
  it('should have 3 input fields', () => {
    const wrapper = render(<Signin />)
    expect(wrapper.find('input').length).to.equal(3)
  })
})
