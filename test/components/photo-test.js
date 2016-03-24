
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'
import Photo from '../../src/components/Photo'

describe('Photo', () => {
  it('should have an image', () => {
    const wrapper = shallow(<Photo />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
