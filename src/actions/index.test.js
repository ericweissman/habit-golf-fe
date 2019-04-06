import * as actions from './index'

describe('actions', () => {
  it('should return the isLoading action with a type and bool', () => {
    const bool = true
    const expected = { type: 'IS_LOADING', isLoading: true }

    const result = actions.isLoading(bool)
    expect(result).toEqual(expected)
  })

  it('should return the hasErrored action with a type and a message', () => {
    const error = 'Error'
    const expected = { type: 'HAS_ERRORED', error: 'Error' }

    const result = actions.hasErrored(error)
    expect(result).toEqual(expected)
  })

  it('should return the loginUserSuccess action with a user', () => {
    const user = 21
    const expected = {
      type: 'LOGIN_USER_SUCCESS',
      user: 21
    }
    const result = actions.loginUserSuccess(user)
    expect(result).toEqual(expected)
  })

  it('should return the setActiveClub action with a type and club', () => {
    const club = 'irons'
    const expected = {
      type: 'SET_ACTIVE_CLUB',
      club: 'irons'
    }
    const result = actions.setActiveClub(club)
    expect(result).toEqual(expected)
  })

  it('should return the setLastShot action with a type and shot', () => {
    const shot = 2
    const expected = {
      type: 'SET_LAST_SHOT',
      shot: 2
    }
    const result = actions.setLastShot(shot)
    expect(result).toEqual(expected)
  })

  it('should return the getDataSuccess action with a type and data', () => {
    const data = { data: {
      playerStats: ['Some stats']
    }}
    const expected = {
      type: 'GET_DATA_SUCCESS',
      data: {
        data: {
          playerStats: ['Some stats']
        }
      }
    }
    const result = actions.getDataSuccess(data)
    expect(result).toEqual(expected)
  })
})