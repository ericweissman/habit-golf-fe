
import { createStore } from 'redux';
import { rootReducer } from '../index';

describe('rootReducer', () => {
  let store = createStore(rootReducer)

  it('should set the store with an initial state', () => {
    let expected = {
      user: 0,
      club: '',
      lastShot: 0,
      shotData: {},
      isLoading: false,
      error: '',
    }

    expect(store.getState()).toEqual(expected)
  })
})