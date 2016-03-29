import Photo from '../../src/components/Photo'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Photo', () => {
  xit('should render an image', () => {
    const wrapper = shallow(<Photo photo_url='../../public/images/city.jpg' />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
