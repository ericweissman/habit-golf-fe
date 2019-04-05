export const userReducer = (state = 0, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return action.user;
    default:
      return state;
  }
}