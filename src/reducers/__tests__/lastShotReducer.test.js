import { lastShotReducer } from '../lastShotReducer'
import * as actions from '../../actions'

describe('lastShotReducer', () => {
  it('should return the initial state', () => {
    const expected = 0
    const result = lastShotReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should set state with a shot', () => {
    const initialState = 0
    const shot = { data: {
      createShot: {
        rating: 2
      }
    }

    }
    const expected = 2
    const result = lastShotReducer(initialState, actions.setLastShot(shot))
    expect(result).toEqual(expected)
  })
})