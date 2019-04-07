export const postShotData = (clubId, rating, id) => ({
  query: `{
    mutation($clubId: Int!, $rating: Int!, $playerId: Int!) {
      createShot( clubId: "${clubId}", rating: "${rating}", playerId: "${id}  ) {
        rating
        clubId
        playerId
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
