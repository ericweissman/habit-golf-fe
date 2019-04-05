export const lastShotReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_LAST_SHOT':
      return action.shot;
    default:
      return state;
  }
}