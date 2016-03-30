
import Accolades from '../../src/components/Accolades'
import { shallow, render, mount } from 'enzyme'
import { expect } from 'chai'
import React from 'react'

describe('Accolades', () => {
  const props = {
    'accolades': {
      'credits': 10,
      'badges': [
        'one year',
        'nine years',
        'Nilu'
      ],
      'activeStreak': 6
    }
  }

  it('should render a div with class of accolades', () => {
    const wrapper = shallow(<Accolades {...props} />)
    expect(wrapper.find('.accolades').length).to.equal(1)
  })
  it('should render a div with class of badges', () => {
    const wrapper = shallow(<Accolades {...props} />)
    expect(wrapper.find('.badges').length).to.equal(1)
  })
  it('should render 3 badges spans', () => {
    const wrapper = mount(<Accolades {...props} />)
    expect(wrapper.find('span').length).to.equal(3)
  })
  it('should render a credits header', () => {
    const wrapper = mount(<Accolades {...props} />)
    expect(wrapper.find('.credits').length).to.equal(1)
  })
  it('should render a active streak header', () => {
    const wrapper = mount(<Accolades {...props} />)
    expect(wrapper.find('.active-streak').length).to.equal(1)
  })
})
