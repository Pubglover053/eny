export function flip(eny = r) {
  return Math.round(eny())
}

export function c(res) {
  return cryptoRandom(res)
}
export function cryptoRandom(res = 8) {
  if (window && window.crypto) {
    const typedArrayDict = {
      8: Uint8Array,
      16: Uint16Array,
      32: Uint32Array,
    }
    const shake = typedArray => window.crypto.getRandomValues(typedArray)
    const diceBox = typedArrayDict[res].of(0)
    const resultingRoll = shake(diceBox)[0]
    const maxRoll = 2 ** res - 1
    return resultingRoll / maxRoll
  }
  throw new Error(
    `cryptoRandom is made for modern browsers. Node users should see nodeSetup`
  )
}
export function cryptoDice(howManyFaces, howManyDice) {
  return d(howManyFaces, howManyDice, c)
}

export function d(howManyFaces, howManyDice, eny) {
  return dice(howManyFaces, howManyDice, eny)
}
export function dice(howManyFaces = 2, howManyDice = 1, eny = r) {
  const roll = () => Math.ceil(eny() * howManyFaces)
  let gross = roll()
  let rolls = 1
  while (rolls < howManyDice) {
    gross += roll()
    rolls += 1
  }
  return gross
}

export function n(randomBytes) {
  return nodeSetup(randomBytes)
}
export function nodeSetup(randomBytes) {
  if (typeof randomBytes === `function`) {
    const getRandomByte = function () {
      const randomByte = randomBytes(1)[0]
      return randomByte
    }
    const cryptoRandom = function () {
      return getRandomByte() / 255
    }
    return { cryptoRandom, getRandomByte }
  }
  throw new Error(`import 'crypto' and pass its randomBytes to this function`)
}

export function r() {
  return Math.random()
}

export function we(a, b, c) {
  switch (undefined) {
    case a:
      return c / b
    case b:
      return c / a
    case c:
      return a * b
    default:
      return `Invalid`
  }
}
