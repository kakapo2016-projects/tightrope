import NoMatch from '../../src/modules/NoMatch'
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

describe('NoMatch', () => {
  it('should have a div with class of 404-page', () => {
    const wrapper = shallow(<NoMatch />)
    expect(wrapper.find('.404-page').length).to.equal(1)
  })
  it('should have 4 paragraphs', () => {
    const wrapper = shallow(<NoMatch />)
    expect(wrapper.find('p').length).to.equal(4)
  })
})
