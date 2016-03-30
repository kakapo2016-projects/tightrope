import SinglePhoto from '../../src/modules/SinglePhoto'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('SinglePhoto', () => {

  const props = { params: { photo_id: 21 } }

  it('should have a div with class single-photo-page', () => {
    const wrapper = shallow(<SinglePhoto {...props} />)
    expect(wrapper.find('.single-photo-page').length).to.equal(1)
  })
  it('should have a col with class single-photo', () => {
    const wrapper = shallow(<SinglePhoto {...props} />)
    expect(wrapper.find('.single-photo').length).to.equal(1)
  })
  it('should render 2 images (a main image and a profile picture)', () => {
    const wrapper = shallow(<SinglePhoto {...props} />)
    expect(wrapper.find('img').length).to.equal(2 )
  })
  it('should render a follow button', () => {
    const wrapper = shallow(<SinglePhoto {...props} />)
    expect(wrapper.find('.followButton').length).to.equal(1)
  })
  it('should render comment box', () => {
    const wrapper = shallow(<SinglePhoto {...props} />)
    expect(wrapper.find('CommentBox').length).to.equal(1)
  })
})
