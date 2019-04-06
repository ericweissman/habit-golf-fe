import { userReducer } from '../userReducer'
import * as actions from '../../actions'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = 0
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with a user', () => {
    const initialState = 0
    const expected = 1
    const result = userReducer(initialState, actions.loginUserSuccess(1))
    expect(result).toEqual(expected)
  })
})