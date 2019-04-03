import React from 'react';
import NewUser from './NewUser';
import { shallow } from 'enzyme'

describe('NewUser', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<NewUser />)
    expect(wrapper).toMatchSnapshot()
  })
})
