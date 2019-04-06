import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme'

describe('Login', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
  })
})
