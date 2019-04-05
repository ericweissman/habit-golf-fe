export const postShotData = (clubId, rating) => ({
  query: `{
    mutation($clubId: Int!, $rating: Int!) {
      createShot( clubId: "${clubId}", rating: "${rating}" ) {
        rating
        clubId
    }
  }`
})