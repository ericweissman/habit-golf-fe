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

  it('should call changeClub when changeClubs is called', () => {
    const mockEvent = {target: {
      value: 'irons'
    }}
    wrapper.instance().changeClubs(mockEvent)
    expect(mockProps.changeClub).toHaveBeenCalled()
  })
  
  it('should call changeFilter with the correct params once the track or view stats buttons are clicked', () => {
    wrapper.find('.take-shot-btn').simulate('click')
    expect(mockProps.changeFilter).toHaveBeenCalled()
  })

  it('should call changeFilter when the take-shot-btn is clicked', () => {
    wrapper.find('.take-shot-btn').simulate('click')
    expect(mockProps.changeFilter).toHaveBeenCalledWith('ratings')
  })

  it('should call changeFilter with the correct params when the view-state is clicked', () => {
    wrapper.find('.view-stats').simulate('click')
    expect(mockProps.changeFilter).toHaveBeenCalledWith('stats')
  })
})
