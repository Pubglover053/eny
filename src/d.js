export default function d(howManyFaces = 2, howManyDice = 1) {
  const roll = () => Math.ceil(Math.random() * howManyFaces)
  let gross = roll()
  let rolls = 1
  while (rolls < howManyDice) {
    gross += roll()
    rolls += 1
  }
  return gross
}
