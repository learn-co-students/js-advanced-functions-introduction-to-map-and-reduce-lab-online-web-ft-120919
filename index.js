// Your code here
function mapToNegativize(inputArray) {
    let newArray = []
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(inputArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(inputArray) {
    let newArray = []
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(inputArray[i])
    }
    return newArray
}

function mapToDouble(inputArray) {
    let newArray = []
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(inputArray[i] * 2)
    }
    return newArray
}

function mapToSquare(inputArray) {
    let newArray = []
    for (let i = 0; i < inputArray.length; i++) {
        newArray.push(inputArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(inputArray, start = 0) {
    for (let i = 0; i < inputArray.length; i++) {
        start += inputArray[i]
    }
    return start
}

function reduceToAllTrue(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        if (!inputArray[i]) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i]) {
            return true
        }
    }
    return false
}