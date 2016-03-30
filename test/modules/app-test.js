import { shallow, mount, render } from 'enzyme'
import App from '../../src/modules/App'
import { expect } from 'chai'
import React from 'react'

describe('App', () => {

  const state = { photos: [
    {
      caption: 'This is a test',
      comments: null,
      created_at: null,
      external_photo_id: '35369311091d3cb6db80745e44933806f27fda2a',
      likes: null,
      photo: null,
      photo_id: 20,
      photo_url: 'http://res.cloudinary.com/dvzbt8kfq/image/upload/v1459238611/user_photos/cake_hlqhko.jpg',
      updated_at: null,
      user_id: 4
    },
    {
      caption: 'This is a test',
      comments: null,
      created_at: null,
      external_photo_id: '97ac1ae0374da09b1d0b909c13941c8c4946d234',
      likes: null,
      photo: null,
      photo_id: 21,
      photo_url: 'http://res.cloudinary.com/dvzbt8kfq/image/upload/v1459238733/user_photos/panda-in-china_fqhmo0.jpg',
      updated_at: null,
      user_id: 4
    }
  ]}

  const props = {
    children: { type: {
        propTypes: Object }
      }
    }

  xit('should render a Navbar', () => {
    const wrapper = mount(<App {...state} {...props} />)
    expect(wrapper.find('.nav-bar')).to.have.length(1)
  })

  xit('should render a Feed', () => {
    const wrapper = mount(<App {...state} {...props} />)
    expect(wrapper.find('Feed')).to.have.length(1)
  })

  xit('should have a Grid', () => {
    const wrapper = mount(<App {...state} {...props} />)
    expect(wrapper.find('Grid')).to.have.length(1)
  })
})
