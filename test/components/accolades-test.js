
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

  xit('should render a div with class of accolades', () => {
    const wrapper = shallow(<Accolades />)
    expect(wrapper.find('.accolades')).to.have.length(1)
  })
  xit('should render 3 spans (badges)', () => {
    console.log(props.accolades.badges)
    console.log(props.accolades.credits)
    const wrapper = mount(<Accolades badges={props.accolades.badges} />)
    expect(wrapper.find('span')).to.have.length(3)
  })
})
