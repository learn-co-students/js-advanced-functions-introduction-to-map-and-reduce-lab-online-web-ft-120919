function mapToNegativize(array) {
    return array.map(value => {
        return value * -1
    })
}

function mapToNoChange(array) {
    return array.map(value => {
        return value
    })
}

function mapToDouble(array) {
    return array.map(value => {
        return value * 2
    })
}

function mapToSquare(array) {
    return array.map(value => {
        return value ** 2
    })
}

function reduceToTotal(array, start=0) {
    return start + array.reduce((total, value) => {
        return total + value
    })
}

function reduceToAllTrue(array) {
    return array.reduce((bool=true, value) => {
        return bool && !!value
    })
}

function reduceToAnyTrue(array) {
    return array.reduce((bool=false, value) => {
        return bool || !!value
    })
}