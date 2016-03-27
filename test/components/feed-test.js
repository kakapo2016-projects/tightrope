import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Feed from '../../src/modules/Feed.js'

describe('Feed', () => {
  xit('Should render the photoset', () => {
    const wrapper = shallow(<Feed />)
    expect(wrapper.find('Photoset')).to.have.length(1)
  })
})
