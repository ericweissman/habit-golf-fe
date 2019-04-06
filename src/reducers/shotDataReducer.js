export const shotDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCESS':
      const stats = action.data.data.playerStats;
      return stats[0]
    default:
      return state;
  }
}