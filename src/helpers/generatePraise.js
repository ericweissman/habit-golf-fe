export const generatePraise = () => {
  const praises = ['wow', 'impressive', 'great shot', 'superb', 'excellent', 'bravo']
  const feedback = praises[Math.floor(Math.random() * praises.length)]
  return feedback
}