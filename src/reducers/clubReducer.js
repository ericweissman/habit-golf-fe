export const clubReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CLUB':
      return action.club;
    default:
      return state;
  }
}