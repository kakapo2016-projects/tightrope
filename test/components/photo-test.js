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

  xit('should render an image', () => {
    const wrapper = shallow(<Photo
      photo_url={this.props.photo_url}
      photo_id={this.props.photo_id}
      comments={this.props.comments}
      likes={this.props.likes}/>)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
