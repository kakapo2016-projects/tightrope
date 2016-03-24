
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Photoset from '../../src/components/Photoset'

describe('Photoset', () => {

  // const photoset = [
  //   '../../images/squares.jpeg',
  //   '../../images/dandelion.jpg',
  //   '../../images/laksa.jpg',
  //   '../../images/purple.jpg',
  //   '../../images/city.jpg'
  // ]

  it('should have a 5 images', () => {
    const wrapper = shallow(<Photoset photoset={photoset}/>)
    expect(wrapper.find('img')).to.have.length(5)
  })
})
