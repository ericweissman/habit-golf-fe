import React from 'react';
import { shallow } from 'enzyme'
import  { App, mapStateToProps, mapDispatchToProps } from '../App/App';
import { setActiveClub } from '../../actions'
import { SignIn } from '../../components/SignIn/SignIn'
import { NewUser } from '../../components/NewUser/NewUser'

describe('App', () => {
  let wrapper
  const mockProps = {
    isLoading: false,
    error: '',
    club: 'wedges',
    setActiveClub: jest.fn()
  }

  it.skip('should correctly match the snapshot', () => {
    wrapper = shallow(<App {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })


  it('should have the proper default state', () => {
    wrapper = shallow(<App {...mockProps} />)
    const expectedState = {
      user: [1],
      filter: 'home',
      newUser: false,
    }
    expect(wrapper.state()).toEqual(expectedState)
  })


  it('should toggle the newUser in state when toggleNewUser is called', () => {
    const expectedState = {
      newUser: true,
      user: [1],
      filter: 'home',
    }
    wrapper.instance().toggleNewUser()
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should toggle filter when changeFilter is called', () => {
    const expectedState = {
      newUser: true,
      user: [1],
      filter: 'stats',
    }
    wrapper.instance().changeFilter('stats')
    expect(wrapper.state()).toEqual(expectedState)
  })

  it('should call setActiveClub when changeClub is called', () => {
    const mockClub = 'irons'
    wrapper.instance().changeClub(mockClub)
    expect(mockProps.setActiveClub).toHaveBeenCalled()
  })

  

  describe('mapStateToProps', () => {
    it('should return an object with isLoading, error, and club', () => {
      const mockState = {
        isLoading: false,
        error: '',
        club: 'wedges',
        fakeState: 1,
        fakeState2: 'a'
      }

      const expected = {
        isLoading: false,
        error: '',
        club: 'wedges',
      }

      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the setActiveClub action', () => {
      const mockDispatch = jest.fn()
      const mockClub = 'irons'
      const mappedProps = mapDispatchToProps(mockDispatch)
      const actionToDispatch = setActiveClub('irons')

      mappedProps.setActiveClub(mockClub)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})