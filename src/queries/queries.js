export const postShotData = (clubId, rating) => ({
  query: `{
    mutation($clubId: Int!, $rating: Int!) {
      createShot( clubId: "${clubId}", rating: "${rating}" ) {
        rating
        clubId
    }
  }`
})

export const getShotData = (id) => ({
  query: `{
    playerStats(playerId: ${id}){
      playerId
      greatShotPercentage
      hookPercentage
      pullPercentage
      pushPercentage
      slicePercentage
    }
  }`
})
