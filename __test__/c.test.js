import crypto from "crypto"
import { c, n } from "../src/eny"

window.crypto = {} // ============= mock browser's window.crypto.getRandomValues
window.crypto.getRandomValues = uIntArray => {
  const howManyBytes = uIntArray.length
  const buffer = crypto.randomBytes(howManyBytes)
  return Uint8Array.from(buffer)
} // ===========================================================================

const { cryptoRandom } = n(crypto.randomBytes)

describe(`browser2 cryptoRandom()`, () => {
  it(`produces a number between 0 and 1`, () => {
    const output = c()
    const assertion = output >= 0 && output <= 1
    expect(assertion).toBe(true)
  })
})

describe(`node cryptoRandom()`, () => {
  it(`produces a number between 0 and 1`, () => {
    const output = cryptoRandom()
    const assertion = output >= 0 && output <= 1
    expect(assertion).toBe(true)
  })
})
