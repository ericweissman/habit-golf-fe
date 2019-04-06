import { clubReducer } from '../clubReducer'
import * as actions from '../../actions'

describe('clubReduer', () => {
  it('should return initial state', () => {
    const expected = ''
    const result = clubReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with a club', () => {
    const initialState = ''
    const expected = 'irons'
    const result = clubReducer(initialState, actions.setActiveClub('irons'))
    expect(result).toEqual(expected)
  })
})