
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Photoset from '../../src/components/Photoset'

describe('Photoset', () => {

  const testphotoset = [
    '../../public/images/squares.jpeg',
    '../../public/images/dandelion.jpg',
    '../../public/images/laksa.jpg',
    '../../public/images/purple.jpg',
    '../../public/images/city.jpg'
  ]


  xit('should have 5 images', () => {
    const wrapper = render(<Photoset photoset={testphotoset}/>)
    expect(wrapper.find('img')).to.have.length(5)
  })
})
