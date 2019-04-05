export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})

export const loginUserSuccess = (user) => ({
  type: 'LOGIN_USER_SUCCESS',
  user
})

export const setActiveClub = (club) => ({
  type: 'SET_ACTIVE_CLUB',
  club
})

export const setLastShot = (shot) => ({
  type: 'SET_LAST_SHOT',
  shot
})