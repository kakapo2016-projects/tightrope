
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Login from '../../src/modules/Login'

describe('Login', () => {
  it('should render sign-in component', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('Signin').length).to.equal(1)
  })
  it('should hrender sign-up component', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('Signup').length).to.equal(1)
  })
})
