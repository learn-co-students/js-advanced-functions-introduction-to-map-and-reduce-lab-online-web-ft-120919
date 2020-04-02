const mapToNegativize = function(arr) {
    return arr.map( elem => -1* elem)
} 

const mapToNoChange = function(arr) {
    return arr.map ( elem => elem)
}

const mapToDouble = function(arr) {
    return arr.map ( elem => 2*elem)
}

const mapToSquare = function(arr) {
    return arr.map ( elem => elem**2)
}

const reduceToTotal = function(arr, startingValue) {
    if (!!startingValue) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce(reducer) + startingValue
    } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return arr.reduce(reducer)
    }
}

const reduceToAllTrue = function(arr) {
    const isTrue = (elem) => !!elem
    return arr.every(isTrue)
}

const reduceToAnyTrue = function(arr) {
    const isTrue = (elem) => !!elem 
    return arr.find(isTrue) ? true : false
}

