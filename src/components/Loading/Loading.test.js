import React from 'react';
import Loading from './Loading';
import { shallow } from 'enzyme'

const mockProps = {
  type: "bubbles"
}
describe('Loading', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Loading {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})