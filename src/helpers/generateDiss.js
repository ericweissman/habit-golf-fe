export const generateDiss = () => {
  const jabs = ['oof', 'woof', 'yeesh', 'yikes', 'yuck', 'not great', 'oh no', 'sheesh', 'hmmm']
  const feedback = jabs[Math.floor(Math.random() * jabs.length)]
  return feedback
}