import React from 'react';
import NewUser from './NewUser';
import { shallow } from 'enzyme'

describe('NewUser', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<NewUser />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expectedState = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should correctly update state based on input', () => {
    const mockEvent1 = {target: {name: 'name', value: 'Eric' }}
    const mockEvent2 = {target: {name: 'email', value: 'eric@geocities.com' }}
    const mockEvent3 = {target: {name: 'password', value: 'abc' }}
    const mockEvent4 = {target: {name: 'confirmPassword', value: 'abc' }}
    const initialState = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
    const expectedState = {
      name: 'Eric',
      email: 'eric@geocities.com',
      password: 'abc',
      confirmPassword: 'abc',
    }

    wrapper.setState(initialState)
    wrapper.instance().handleChange(mockEvent1);
    wrapper.instance().handleChange(mockEvent2);
    wrapper.instance().handleChange(mockEvent3);
    wrapper.instance().handleChange(mockEvent4);

    expect(wrapper.state()).toEqual(expectedState)
  })
})
