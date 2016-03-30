import CommentList from '../../src/components/CommentList'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('CommentList', () => {
  const props = [
    {comment: '1', username: 'a'},
    {comment: '2', username: 'b'},
    {comment: '3', username: 'c'},
    {comment: '4', username: 'd'}
  ]

  xit('should render 4 comments', () => {
    const wrapper = render(<CommentList
      {...props}/>)
    expect(wrapper.find('.comment').length).to.equal(4)
  })
})
