// Your code here
function mapToNegativize(values) {
  const result = [];
  for(let i = 0; i < values.length; i++) {
    result.push(values[i] * -1);
  }
  return result;
}

function mapToNoChange(values) {
  const result = [];
  for(let i = 0; i < values.length; i++) {
    result.push(values[i]);
  }
  return result;
}

function mapToDouble(values) {
  const result = [];
  for(let i = 0; i < values.length; i++) {
    result.push(values[i] * 2);
  }
  return result;
}

function mapToSquare(values) {
  const result = [];
  for(let i = 0; i < values.length; i++) {
    result.push(values[i] ** 2);
  }
  return result;
}

function reduceToTotal(values, start = 0) {
  let result = start;
  for(let i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result;
}

function reduceToAllTrue(values) {
  let result = true;
  for(let i = 0; i < values.length; i++) {
    result = values[i] && result;
  }
  return result;
}

function reduceToAnyTrue(values) {
  let result = false;
  for(let i = 0; i < values.length; i++) {
    result = values[i] || result;
  }
  return result;
}