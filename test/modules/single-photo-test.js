import SinglePhoto from '../../src/modules/SinglePhoto'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('SinglePhoto', () => {

  xit('should render comment box', () => {
    const wrapper = shallow(<SinglePhoto />)
    expect(wrapper.find('CommentBox').length).to.equal(1)
  })
})
