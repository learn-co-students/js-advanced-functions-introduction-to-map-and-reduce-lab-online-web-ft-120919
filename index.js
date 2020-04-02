// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(element => element* -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray.map(element => element)
}

function mapToDouble(sourceArray) {
  return sourceArray.map(element => element * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(element => element ** 2)
}


function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((acc, element) => {
    return element + acc
  }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce((result, element) => {
    return element == false ? false : true
  })
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce((result, element) => {
    return element == true ? true : false
  })
}
