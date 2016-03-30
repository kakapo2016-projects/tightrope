import CommentBox from '../../src/components/CommentBox'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('CommentBox', () => {
  it('should have a div with class comment-box ', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper.find('.comment-box').length).to.equal(1)
  })
  it('should render comment list', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper.find('CommentList').length).to.equal(1)
  })
  it('should render comment form', () => {
    const wrapper = shallow(<CommentBox />)
    expect(wrapper.find('CommentForm').length).to.equal(1)
  })
})
