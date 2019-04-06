import React from 'react';
import Feedback from './Feedback';
import { shallow } from 'enzyme'

describe('Feedback', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback />)
    expect(wrapper).toMatchSnapshot()
  })
})