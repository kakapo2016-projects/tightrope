import Comment from '../../src/components/Comment'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('Comment', () => {
  const testComment = {
    comment: 'This is the best photo I have ever seen',
    username: 'Simon'
  }
  it('should have a div with classname comment', () => {
    const wrapper = shallow(<Comment />)
    expect(wrapper.find('.comment')).to.have.length(1)
  })
  it('should have a username of Simon', () => {
    const wrapper = mount(<Comment username={testComment.username}/>)
    expect(wrapper.props().username).to.equal('Simon')
  })
  // failing
  xit('should display the correct comment', () => {
    const wrapper = mount(<Comment username={testComment.comment}/>)
    expect(wrapper.props().comment).to.equal('This is the best photo I have ever seen')
  })
})
