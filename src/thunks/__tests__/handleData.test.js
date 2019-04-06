import { handleData } from '../handleData'
import { hasErrored, isLoading, getDataSuccess } from '../../actions'

describe('handleData', () => {
  let mockQuery
  let mockDispatch

  beforeEach(() => {
    mockQuery = 'https://habit-golf-api.herokuapp.com/graphql'
    mockDispatch = jest.fn()
  })

  it('should call dispatch which isLoading(true) action', () => {
    const thunk = handleData(getDataSuccess, mockQuery)
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should dispatch hasErrored with a message if the response is not OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      errors: [{ message: 'Not OK' }]
    }))
    const thunk = handleData(getDataSuccess, mockQuery)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Not OK'))
  })

  it('should dipsatch isLoading(false) if the response is OK', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
    }))
    const thunk = handleData(getDataSuccess, mockQuery)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch getDataSuccess', async () => {
    const mockData = {
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
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }))

    const thunk = handleData(getDataSuccess, mockQuery)
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(getDataSuccess(mockData))
  })
})