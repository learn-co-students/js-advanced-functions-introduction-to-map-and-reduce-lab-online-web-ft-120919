// Your code here
function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * -1)
    });
    return newArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element * 2)
    });
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(element ** 2)
    });
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    sourceArray.forEach(element => {
        total += element
    })
    return total
}

function reduceToAllTrue(sourceArray) {
    let result; 
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            result = true 
        }
        else {
            result = false 
        }
    }
    return result
}

function reduceToAnyTrue(sourceArray) {
    let result;
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            result = true 
            break 
        }
        else {
            result = false 
        }
    }
    return result
}
