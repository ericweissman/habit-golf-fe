import { isLoading, hasErrored } from '../actions'

export const handleData = (actionToDispatch, query) => {
  const uri = "https://habit-golf-api.herokuapp.com/graphql"
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
      })
      if(!response.ok) {
        throw Error(response.errors[0].message)
      }
      dispatch(isLoading(false))
      const result = await response.json()
      dispatch(actionToDispatch(result))
    } catch (error) {
      dispatch(hasErrored(error.message))
      dispatch(isLoading(false))
    }
  }
}