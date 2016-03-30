import Friends from '../../src/modules/Friends'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('Friends', () => {
  xit('should render friendslist', () => {
    let state = [
      { active_streak: 0,
        created_at: '2016-03-29T07:06:06.506Z',
        credits: 0,
        doa: '2016-03-30T07:06:06.505Z',
        email: 'admin@tightrope.io',
        hashed_password: 'admin',
        liker: 'test',
        profile_pic: 'http://fillmurray.com/800/800',
        updated_at: '2016-03-29T07:06:06.506Z',
        user_id: 1,
        username: 'admin'
      },
      { active_streak: 0,
        created_at: '2016-03-29T07:06:06.506Z',
        credits: 0,
        doa: '2016-03-30T07:06:06.505Z',
        email: 'admin@tightrope.io',
        hashed_password: 'admin',
        liker: 'test',
        profile_pic: 'http://fillmurray.com/800/800',
        updated_at: '2016-03-29T07:06:06.506Z',
        user_id: 2,
        username: 'test'
      }
    ]
    const wrapper = shallow(<Friends {...state}/>)
    expect(wrapper.find('FriendsList').length).to.equal(1)
  })
  it('should not render friends if state is null', () => {
    let state = null
    const wrapper = shallow(<Friends />)
    expect(wrapper.find('FriendsList').length).to.equal(0)
  })
})
