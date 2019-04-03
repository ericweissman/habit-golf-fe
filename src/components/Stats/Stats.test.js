import React from 'react';
import Stats from './Stats';
import { shallow } from 'enzyme'

describe('Stats', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Stats />)
    expect(wrapper).toMatchSnapshot()
  })
})
