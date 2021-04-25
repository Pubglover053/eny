import { d } from "../src"

describe(`d(numberOfFaces, numberOfDice)`, () => {
  it(`rolls 2D6`, () => {
    const output = d(2, 6)
    const assertion = output >= 2 && output <= 12
    expect(assertion).toBe(true)
  })
})
