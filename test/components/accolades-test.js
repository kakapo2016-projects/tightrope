
import { expect } from 'chai'
import { shallow, render, mount } from 'enzyme'
import React from 'react'

import Accolades from '../../src/components/Accolades'

describe('Accolades', () => {
  const testData = {
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
  it('should have a div with class of accolades', () => {
    const wrapper = shallow(<Accolades />)
    expect(wrapper.find('.accolades')).to.have.length(1)
  })
  it('should render 3 spans (badges)', () => {
    console.log(testData.accolades.badges)
    const wrapper = shallow(<Accolades badges={testData.accolades.badges} />)
    expect(wrapper.find('span')).to.have.length(3)
  })
})
