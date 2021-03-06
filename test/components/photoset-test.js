import Photoset from '../../src/components/Photoset'
import { render } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Photoset', () => {
  const testphotoset = [
    '../../public/images/squares.jpeg',
    '../../public/images/dandelion.jpg',
    '../../public/images/laksa.jpg',
    '../../public/images/purple.jpg',
    '../../public/images/city.jpg'
  ]

  it('should have 5 images', () => {
    const wrapper = render(<Photoset photoset={testphotoset}/>)
    expect(wrapper.find('img')).to.have.length(5)
  })
})
