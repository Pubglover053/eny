/* eslint-disable import/prefer-default-export */

function order(array, callback) {
  return array.sort((a, b) => {
    const uncertainty = Math.random() - 0.5
    const weightA = callback(a)
    const weightB = callback(b)
    return uncertainty + weightA - weightB
  })
}

export { order }
