import FeedPhotos from '../../src/components/Feed-photos'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('FeedPhotos', () => {
  it('should render a photoset', () => {
    const wrapper = shallow(<FeedPhotos />)
    expect(wrapper.find('.photoset')).to.have.length(1)
  })
})
