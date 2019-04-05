import React from 'react';
import Ratings from './Ratings';
import { shallow } from 'enzyme'

describe('Ratings', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Ratings />)
    expect(wrapper).toMatchSnapshot()
  })
})
