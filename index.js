function mapToNegativize(arr) {
  return arr.map((a) => a = 0 - a)
} 

function mapToNoChange(arr) {
  return arr
}

function mapToDouble(arr) {
  return arr.map((a) => a * 2)
}

function mapToSquare(arr) {
  return arr.map((a) => a**2)
}

function reduceToTotal(arr, start=0) {
  return arr.reduce((a, c) => a + c, start)
}

function reduceToAllTrue(arr) {
  return arr.every((a) => !!a == true)
}

function reduceToAnyTrue(arr) {
  return !arr.every((a) => !!a == false)
}