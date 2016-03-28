import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Upload from '../../src/modules/Upload'

describe('Upload', () => {
  it('should render the upload widget', () => {
    const wrapper = shallow(<Upload />)
    expect(wrapper.find('#upload_widget_opener')).to.have.length(1)
  })
})
