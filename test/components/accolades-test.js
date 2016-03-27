
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import React from 'react'

import Accolades from '../../src/components/Accolades'

describe('Accolades', () => {
  var data = {
    'accolades': [
      {
        'credits': 10,
        'badges': [
          'one year',
          'nine years',
          'Nilu'
        ],
        'activeStreak': 6
      }
    ]
  }
  xit('should have a div', () => {
    const wrapper = shallow(<Accolades />)
    expect(wrapper.find('div')).to.have.length(2)
  })
  it('should render 4 li', () => {
    const wrapper = mount(<Accolades badges={data.accolades.badges} />)
    expect(wrapper.find('li')).to.have.length(4)
  })
  xit('should have a div', () => {
    const wrapper = shallow(<Accolades />)
    expect(wrapper.find('div')).to.have.length(2)
  })
})
