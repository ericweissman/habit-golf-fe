import React from 'react';
import { Ratings, mapDispatchToProps, mapStateToProps } from './Ratings';
import { shallow } from 'enzyme'
import { handleData } from '../../thunks/handleData'
import { postShotData } from '../../queries/queries'
import { setLastShot } from '../../actions'

jest.mock('../../thunks/handleData')

const mockProps1 = {
  handleData: jest.fn(),
  setLastShot: jest.fn(),
  club: 'irons',
  random: jest.fn(),
  changeFilter: jest.fn(),
}
const mockProps2 = {
  handleData: jest.fn(),
  setLastShot: jest.fn(),
  club: 'wedges',
  random: jest.fn(),
  changeFilter: jest.fn(),
}
const mockProps3 = {
  handleData: jest.fn(),
  setLastShot: jest.fn(),
  club: 'woods',
  random: jest.fn(),
  changeFilter: jest.fn(),
}

describe('Ratings', () => {
  let wrapper

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Ratings />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state', () => {
    const expectedState = {
      result: 0,
      currClub: 0,
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Ratings {...mockProps1} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Ratings {...mockProps2} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Ratings {...mockProps3} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the proper default state when props are passed', () => {
    const expectedState = {
      result: 0,
      currClub: 3,
    }
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should call handleClick with the correct params', () => {
    wrapper.setState({result: 5, currClub: 3})
    wrapper.instance().handleClick()
    expect(mockProps3.random).toHaveBeenCalled()
    expect(mockProps3.handleData).toHaveBeenCalledWith(setLastShot, postShotData(3, 5, 1))
    expect(mockProps3.changeFilter).toHaveBeenCalledWith('home')
  })

  it('should update state with the correct result', () => {
    const mockEvent = {target: {value: 6}}
    wrapper.instance().updateResult(mockEvent)
    expect(wrapper.state().result).toEqual(6)
  })

  describe('mapStateToProps', () => {
    it('should return an object with club', () => {
      const mockState = {
        club: 'irons',
        fakeState: 123
      }
      const expected = {
        club: 'irons'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the handleData thunk', () => {
      const mockDispatch = jest.fn()
      const mockUser = 1
      const mockClub = 2
      const mockResult = 5
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = handleData(setLastShot, postShotData(mockClub, mockResult, 1))

      mappedProps.handleData(setLastShot, postShotData(mockClub, mockResult, 1))
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
