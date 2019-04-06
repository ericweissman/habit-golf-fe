import { shotDataReducer } from '../shotDataReducer'
import * as actions from '../../actions'

describe('shotDataReducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = shotDataReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with the correct data', () => {
    const initialState = {}
    const expected = {
      playerId: 2,
      greatShotPercentage: 20,
      hookPercentage: 20,
      pullPercentage: 20,
      pushPercentage: 20,
      slicePercentage: 20,
    }
    const result = shotDataReducer(initialState, actions.getDataSuccess(
      {
        data: {
          playerStats: [{
            playerId: 2,
            greatShotPercentage: 20,
            hookPercentage: 20,
            pullPercentage: 20,
            pushPercentage: 20,
            slicePercentage: 20,
          }]
        }
      }
    ))
    expect(result).toEqual(expected)
  })
})