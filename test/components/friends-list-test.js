import FriendsList from '../../src/components/Friends-list'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('FriendsList', () => {

  const props = { friends: [
    {
      username: 'a',
      profile_pic: 'a.jpg',
      likes: 4,
      streak: 5,
    },
    {
      username: 'b',
      profile_pic: 'b.jpg',
      likes: 5,
      streak: 6,
    }
  ]
}

  it('should have a div with class of friends', () => {
    const wrapper = shallow(<FriendsList />)
    expect(wrapper.find('.friends').length).to.equal(1)
  })
  it('should render a list of 2 friends', () => {
    const wrapper = render(<FriendsList {...props}/>)
    expect(wrapper.find('.friendPanel').length).to.equal(2)
  })
})
