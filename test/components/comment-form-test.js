import CommentForm from '../../src/components/CommentForm'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('CommentForm', () => {
  it('should have a form with class comment-form', () => {
    const wrapper = shallow(<CommentForm />)
    expect(wrapper.find('.comment-form').length).to.equal(1)
  })
  it('should have a form input', () => {
    const wrapper = shallow(<CommentForm />)
    expect(wrapper.find('.comment-input').length).to.equal(1)
  })
  it('should have a submit button', () => {
    const wrapper = shallow(<CommentForm />)
    expect(wrapper.find('.comment-submit').length).to.equal(1)
  })
})
