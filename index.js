// Your code here
function mapToNegativize(array) {
  let r = []

  for (let i = 0; i < array.length; i++) {
    r.push(-1 * array[i])
  }
  return r
}

function mapToNoChange(array) {
  let r = []

  for (let i = 0; i < array.length; i++) {
    r.push(array[i])
  }
  return r
}

function mapToDouble(array) {
  let r = []

  for (let i = 0; i < array.length; i++) {
    r.push( 2 * array[i]) 
  }
  return r
}

function mapToSquare(array) {
  let r = []

  for (let i = 0; i < array.length; i++) {
    r.push(array[i] * array[i])
  }
  return r
}

function reduceToTotal(array, start = 0) {
  let t = start
  for (let i = 0; i < array.length; i++) {
    t += array[i]
  }
  return t
}

function reduceToAllTrue(array) {
  let t = true
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === false) {
      t = false
    }
  }
  return t
}
function reduceToAnyTrue(array) {
  let t = false
  for (let i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      t = true
    }
  }
  return t
}