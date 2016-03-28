import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Photo from '../../src/components/Photo'

describe('Photo', () => {
  xit('should render an image', () => {
    const wrapper = shallow(<Photo photo_url='../../public/images/city.jpg' />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
