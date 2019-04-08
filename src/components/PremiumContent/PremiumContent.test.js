import React from 'react';
import PremiumContent from './PremiumContent';
import { shallow } from 'enzyme'

describe('PremiumContent', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<PremiumContent changeFilter={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
})
