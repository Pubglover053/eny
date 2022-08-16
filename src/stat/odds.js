function countCases(wins, tries) {
  let total = 0
  for (
    let cor = 1 + (tries - wins), idx = 1, pro = 1;
    cor;
    cor--, idx++, pro += idx
  ) {
    total += cor * pro
    console.log(total)
  }
  return total
}

function getOddsOfOutcome(wins, tries, oddsToWin) {
  const losses = tries - wins
  const oddsToLose = 1 - oddsToWin
  const oddsOfThisManyWins = oddsToWin ** wins
  const oddsOfThisManyLosses = oddsToLose ** losses
  const caseCount = countCases(wins, tries)
  console.log(oddsOfThisManyWins)
  console.log(oddsOfThisManyLosses)
  console.log(caseCount)
  return (
    oddsToWin ** wins *
    (1 - oddsToWin) ** (tries - wins) *
    countCases(wins, tries)
  )
}

export { countCases, getOddsOfOutcome }
