export const generateRandomClub = () => {
  const clubs = ['wedges', 'irons', 'woods']
  const randomClub = clubs[Math.floor(Math.random() * clubs.length)]
  return randomClub
}
