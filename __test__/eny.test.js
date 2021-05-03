import crypto from "crypto"
import { bitFlip, nodeSetup } from "../src/eny"

const { cryptoRandom } = nodeSetup(crypto.randomBytes)
const b = () => bitFlip(cryptoRandom)

function summarizeResults(hypothesis, observed) {
  let summary = ``
  for (let i = 0; i < hypothesis.length; i++) {
    const { is } = hypothesis[i]
    const { odds } = observed[i]
    summary += `\n${is}: = ${odds}`
  }
  return summary
}
function testOdds({ subject, hypothesis, certainty }) {
  subject.args = subject.args || []
  const observed = hypothesis.map(() => ({ odds: 0, tale: 0 }))
  let trial = 0
  let doubt = 0
  while (doubt < certainty) {
    trial++
    doubt = 0
    const result = subject.function(...subject.args)
    const idxOfResult = hypothesis.findIndex(
      contingency => contingency.is === result
    )
    if (idxOfResult === -1) {
      throw new Error(`you didn't expect ${result} to occur`)
    }

    observed[idxOfResult].tale++
    for (const contingency of observed) {
      contingency.odds = contingency.tale / trial
    }
    console.log(
      subject.function.name,
      `->`,
      result,
      summarizeResults(hypothesis, observed, trial)
    )
    if (result === 0) return false
  }
}

describe(`b`, () => {
  it(`is equally likely to return 0 or 1`, () => {
    const subject = {
      function: b,
      args: undefined,
    }
    const hypothesis = [
      { is: 0, odds: 0.5 },
      { is: 1, odds: 0.5 },
    ]
    const certainty = 0.99
    const opinion = testOdds({ subject, hypothesis, certainty })
    expect(opinion).toBe(true)
  })
})
