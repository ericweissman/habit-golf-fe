export const postShotData = (clubId, rating, id) => ({
  query: `mutation {
      createShot( clubId: ${clubId}, rating: ${rating}, playerId: ${id}  ) {
        rating
        clubId
        playerId
    }
  }`
})

export const getShotDataAllTime = (id) => ({
  query: `{
    playerStats(playerId: ${id}){
      playerId
      greatShotPercentage
      hookPercentage
      pullPercentage
      pushPercentage
      slicePercentage
      duffPercentage
    }
  }`
})

export const getShotDataToday = (id) => ({
  query: `{
    playerStats(playerId: ${id}){
      playerId
      todayGreatShotPercentage
      todayHookPercentage
      todayPullPercentage
      todayPushPercentage
      todaySlicePercentage
      todayDuffPercentage
    }
  }`
})