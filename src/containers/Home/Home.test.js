import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme'

describe('Home', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
