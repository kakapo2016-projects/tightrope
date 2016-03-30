import Photo from '../../src/components/Photo'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Photo', () => {

  const props = { photo: {
    photo_url: '../../public/images/city.jpg',
    photo_id: '1234',
    likes: '4',
    comments: '1'
    }
  }

  it('should render an image', () => {
    const wrapper = shallow(<Photo {...props} />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
