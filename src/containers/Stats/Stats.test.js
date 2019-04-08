import React from 'react';
import { Stats, mapDispatchToProps, mapStateToProps } from './Stats';
import { handleData } from '../../thunks/handleData'
import { getShotDataAllTime, getShotDataToday } from '../../queries/queries'
import { getDataSuccess } from '../../actions'
import { shallow } from 'enzyme'

jest.mock('../../thunks/handleData')

describe('Stats', () => {
  let wrapper
  const mockProps = {
    shotData: {
      greatShotPercentage: 10,
      hookShotPercentage: 10,
      duffShotPercentage: 10,
      sliceShotPercentage: 10,
      pushShotPercentage: 10,
      pullShotPercentage: 10,
    },
    handleData: jest.fn(),
    isLoading: false,
    changeFilter: jest.fn()
  }


  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Stats {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state', () => {
    const expectedState = { range: 'today' }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should call changeFilter when the back button is clicked', () => {
    wrapper.find('.back-btn').simulate('click')
    expect(mockProps.changeFilter).toHaveBeenCalledWith('home')
  })

  describe('changeRange', () => {
    it('should correctly update the state when changeRange is called', () => {
      const mockEvent = { target: { value: 'all time' } }
      const mockEvent2 = { target: { value: 'today' } }
      const expectedState = { range: 'all time' }
      const expectedState2 = { range: 'today' }
      wrapper.instance().changeRange(mockEvent)
      expect(wrapper.state()).toEqual(expectedState)
      wrapper.instance().changeRange(mockEvent2)
      expect(wrapper.state()).toEqual(expectedState2)
    })

    it('should call handleData wiht getShotsAllTime if range is TODAY and changeRange is called' , () => {
      const mockEvent = { target: { value: 'all time' } }
      const mockUser = 1
      wrapper.setState({range: 'today'})
      wrapper.instance().changeRange(mockEvent)
      expect(mockProps.handleData).toHaveBeenCalledWith(getDataSuccess, getShotDataAllTime(mockUser))
    })

    it('should call handleData wiht getShotsToday if range is allTime and changeRange is called', () => {
      const mockEvent = { target: { value: 'today' } }
      const mockUser = 1
      wrapper.setState({ range: 'all time' })
      wrapper.instance().changeRange(mockEvent)
      expect(mockProps.handleData).toHaveBeenCalledWith(getDataSuccess, getShotDataToday(mockUser))
    })
  })


  describe('mapStateToProps', () => {
    it('should return an object with shotData and isLoading', () => {
      const mockState = {
        isLoading: false,
        shotData: [{ goodShots: 12 }],
        fakeState: 1,
        fakeState2: 'a'
      }

      const expected = {
        isLoading: false,
        shotData: [{ goodShots: 12 }],
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the handleData thunk', () => {
      const mockDispatch = jest.fn()
      const mockUser = 1
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = handleData(getDataSuccess, getShotDataAllTime(1))

      mappedProps.handleData(getDataSuccess, getShotDataAllTime(mockUser))
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
