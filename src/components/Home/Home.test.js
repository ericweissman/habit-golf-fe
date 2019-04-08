import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme'

describe('Home', () => {
  let wrapper
  let mockProps = {
    changeClub: jest.fn(),
    club: 'wedges',
    changeFilter: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<Home {...mockProps} />)
  })

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Home {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    const expectedState = { currClub: 'wedges'}
    expect(wrapper.state()).toEqual(expectedState)
  })

  it.skip('should call changeClub when changeClubs is called', () => {
    const mockEvent = {target: {
      value: 'irons'
    }}
    wrapper.instance().changeClubs(mockEvent)
    expect(wrapper.props().changeClub).toHaveBeenCalled()
  })
  
  it.skip('should call changeFilter once the track or view stats buttons are clicked', () => {
    wrapper.find('.take-shot-btn').simulate('click')
    expect(wrapper.props().changeFilter).toHaveBeenCalled()
  })
})
