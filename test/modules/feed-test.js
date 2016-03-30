import Feed from '../../src/modules/Feed.js'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Feed', () => {

  it('Should render the photo feed if state has photos', () => {
    let state = []
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('FeedPhotos')).to.have.length(1)
  })
  it('Should not render a photo feed if state is null', () => {
    let state = null
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('FeedPhotos')).to.have.length(0)
  })
})
