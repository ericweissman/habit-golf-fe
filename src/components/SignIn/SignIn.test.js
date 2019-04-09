import React from 'react';
import SignIn from './SignIn';
import { shallow } from 'enzyme'

describe('SignIn', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<SignIn />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expectedState = {
      email: '',
      password: '',
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should correctly update state based on input', () => {
    const mockEvent1 = { target: { name: 'email', value: 'eric@geocities.com' } }
    const mockEvent2 = { target: { name: 'password', value: 'abc' } }
    const initialState = {
      email: '',
      password: '',
    }
    const expectedState = {
      email: 'eric@geocities.com',
      password: 'abc',
    }

    wrapper.setState(initialState)
    wrapper.instance().handleChange(mockEvent1);
    wrapper.instance().handleChange(mockEvent2);

    expect(wrapper.state()).toEqual(expectedState)
  })
})
