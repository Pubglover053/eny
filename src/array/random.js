/* eslint-disable no-restricted-syntax */

import { d } from "../eny"

function randomIdxOf(array) {
  return d(array.length) - 1
}

function whichever(array) {
  return array[randomIdxOf(array)]
}

function some(array, howManyElements) {
  if (!howManyElements) howManyElements = d(array.length - 1)
  const picks = []
  const arrayCopy = [...array]
  while (howManyElements > 0) {
    picks.push(arrayCopy.splice(randomIdxOf(arrayCopy), 1))
    howManyElements -= 1
  }
  return picks
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

function scatter(array, howManyNewArrays) {
  if (!howManyNewArrays) howManyNewArrays = d(array.length)
  const newArrays = []
  while (howManyNewArrays > 0) {
    newArrays.push([])
    howManyNewArrays -= 1
  }
  for (const element of array) {
    whichever(newArrays).push(element)
  }
  return newArrays
}

export { whichever, some, shuffle, scatter }
