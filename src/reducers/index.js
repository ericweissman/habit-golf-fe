import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer'
import { hasErroredReducer } from './hasErroredReducer'
import { clubReducer } from './clubReducer'
import { userReducer } from './userReducer'
import { lastShotReducer } from './lastShotReducer'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: hasErroredReducer,
  user: userReducer,
  club: clubReducer,
  lastShot: lastShotReducer,
})