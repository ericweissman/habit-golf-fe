import React from 'react';
import PremiumContent from './PremiumContent';
import { shallow } from 'enzyme'

const mockProps = {
  changeFilter: jest.fn()
}
describe('PremiumContent', () => {
  let wrapper
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<PremiumContent {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call changeFilter when the back-to-home button is clicked', () => {
    wrapper.find('.back-to-home').simulate('click')
    expect(mockProps.changeFilter).toHaveBeenCalled()
  })
})
