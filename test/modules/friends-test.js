import Friends from '../../src/modules/Friends'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('Friends', () => {
  xit('should render friendslist', () => {
    const wrapper = shallow(<Friends />)
    expect(wrapper.find('FriendsList').length).to.equal(1)
  })
  it('should not render friends if state is null', () => {
    let state = null
    const wrapper = shallow(<Friends />)
    expect(wrapper.find('FriendsList').length).to.equal(0)
  })
})
