import React from 'react';
import { shallow } from 'enzyme'
import { Feedback, mapStateToProps } from './Feedback';
import * as praise from '../../helpers/generatePraise'
import * as diss from '../../helpers/generateDiss'

praise.generatePraise = jest.fn(() => 'wow')
diss.generateDiss = jest.fn(() => 'woof')

describe('Feedback', () => {
  let wrapper
  const mockProps1 = { lastShot: 1 }
  const mockProps2 = { lastShot: 2 }
  const mockProps3 = { lastShot: 3 }
  const mockProps4 = { lastShot: 4 }
  const mockProps5 = { lastShot: 5 }
  const mockProps6 = { lastShot: 6 }

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps1} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps2} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps3} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps4} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps5} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should correctly match the snapshot', () => {
    wrapper = shallow(<Feedback {...mockProps6} />)
    expect(wrapper).toMatchSnapshot()
  })
  


  describe('mapStateToProps', () => {
    it('should return an object with lastShot', () => {
      const mockState = {
        lastShot: 2,
        fakeState: '123'
      }
      const expected = {
        lastShot: 2,
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})