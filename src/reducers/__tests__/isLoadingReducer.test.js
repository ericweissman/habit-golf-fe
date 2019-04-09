import { isLoadingReducer } from '../isLoadingReducer'
import * as actions from '../../actions'

describe('isLoadingReducer', () => {

  it('should return initial state', () => {
    const expected = false

    const result = isLoadingReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should set isLoading status', () => {

    const initialState = false
    const expected = true

    const result = isLoadingReducer(initialState, actions.isLoading(true))

    expect(result).toEqual(expected)
  })
})