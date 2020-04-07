// Your code here
// MAP LIKE METHODS
// mapToNegativize returns an array with all values made negative
const mapToNegativize = function (sourceArray) {
  let newArray = []
  sourceArray.forEach((value) => {
    newArray.push(value * -1)
  })
  return newArray
}

// mapToNoChange returns an array with the original values
const mapToNoChange = function (sourceArray) {
  let newArray = []
  sourceArray.forEach((value) => {
    newArray.push(value)
  })
  return newArray
}

// mapToDouble returns an array with the original values multiplied by 2

const mapToDouble = function (sourceArray) {
  let newArray = []
  sourceArray.forEach((value) => {
    newArray.push(value * 2)
  })
  return newArray
}

// mapToSquare returns an array with the original values squared

const mapToSquare = function (sourceArray) {
  let newArray = []
  sourceArray.forEach((value) => {
    newArray.push(value ** 2)
  })
  return newArray
}

// REDUCE LIKE METHODS
// reduceToTotal returns a running total when not given a starting point

const reduceToTotal = function (sourceArray, startingPoint) {
  let total = startingPoint || 0
  sourceArray.forEach((value) => {
    total += value
  })
  return total
}

// reduceToAllTrue returns true when all values are truthy
// reduceToAllTrue returns false when any value is falsy
function isTrue(value) {
  return Boolean(value)
}

const reduceToAllTrue = function (sourceArray) {
  return sourceArray.every(isTrue)
}

// reduceToAnyTrue returns true when a true value is present
// reduceToAnyTrue returns false when no true value is present

const reduceToAnyTrue = function (sourceArray) {
  return sourceArray.some(isTrue)
}
