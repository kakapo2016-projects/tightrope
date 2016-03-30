import Upload from '../../src/modules/Upload'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Upload', () => {
  it('should render the upload widget', () => {
    const wrapper = shallow(<Upload />)
    expect(wrapper.find('#upload_widget_opener')).to.have.length(1)
  })
})
