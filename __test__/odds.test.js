import crypto from "crypto"
import { d, n } from "../src"
import { countCases, getOddsOfOutcome } from "../src/stat/odds"

const { cryptoRandom } = n(crypto.randomBytes)

const unfairCoin = () => (cryptoRandom() > 0.6 ? 1 : 0)

describe(`d(numberOfFaces, numberOfDice)`, () => {
  it(`rolls 2D6`, () => {
    const output = d(2, 6)
    const assertion = output >= 2 && output <= 12
    expect(assertion).toBe(true)
  })
})

describe(`countCases(wins, tries)`, () => {
  it(`finds 3 cases of 2 of 3`, () => {
    expect(countCases(2, 3)).toBe(3)
  })
  it(`finds 5 cases of 4 of 5`, () => {
    expect(countCases(4, 5)).toBe(5)
  })
  it(`finds 15 cases of 4 of 6`, () => {
    expect(countCases(4, 6)).toBe(15)
  })
  it(`finds 7 cases of 1 of 7`, () => {
    expect(countCases(1, 7)).toBe(35)
  })
  it(`finds 35 cases of 3 of 7`, () => {
    expect(countCases(3, 7)).toBe(35)
  })
  it(`finds 35 cases of 4 of 7`, () => {
    expect(countCases(4, 7)).toBe(35)
  })
})

describe(`getOddsOfOutcome(wins, tries, odds)`, () => {
  it(`finds the odds of 2/3 heads on an unfair coin`, () => {
    const output = getOddsOfOutcome(2, 3, 0.6)
    const asByHand = 0.6 * 0.6 * 0.4 * 3
    expect(output).toBe(asByHand)
  })
})
