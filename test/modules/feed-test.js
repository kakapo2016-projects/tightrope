import Feed from '../../src/modules/Feed.js'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Feed', () => {

  it('Should render the sort buttons div', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('.sort-buttons').length).to.equal(1)
  })
  it('Should render 3 sort buttons', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('Button').length).to.equal(3)
  })
  it('Should not render a photo feed if state is null', () => {
    let state = null
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('FeedPhotos').length).to.equal(0)
  })
  xit('Should render FeedPhotos', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('FeedPhotos').length).to.equal(1)
  })
})
