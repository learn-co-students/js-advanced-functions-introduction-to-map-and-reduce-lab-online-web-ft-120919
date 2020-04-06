// Your code here
function mapToNegativize(sourceArray) {
    let negativeNumbers = []
    for(let i = 0; i < sourceArray.length; i++) {
        negativeNumbers.push(sourceArray[i] * -1)
    }
    return negativeNumbers
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let doubledNumbers = []
    for(let i = 0; i < sourceArray.length; i++) {
        doubledNumbers.push(sourceArray[i] * 2)
    }
    return doubledNumbers
}

function mapToSquare(sourceArray) {
    let squaredNumbers = [] 
    for(let i = 0; i < sourceArray.length; i++) {
        squaredNumbers.push(sourceArray[i] ** 2)//exponentiation operator-- Operator: var1 ** var2
    }
    return squaredNumbers
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint;
    for(let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    
    return total
}

function reduceToAllTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if(!sourceArray[i]){
            return false
        }    
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i]){
            return true
        }   
    }
    return false
}