function mapToNegativize(sourceArray) {
    return sourceArray.map(sourceArray => -sourceArray)
};

function mapToNoChange(sourceArray) {
    return sourceArray
};

function mapToDouble(sourceArray) {
    return sourceArray.map(sourceArray => sourceArray * 2)
};

function mapToSquare(sourceArray) {
    return sourceArray.map(function(x) {
        return Math.pow(x, 2)
    })
};

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce((num, element) => {
        return element + num 
    }, startingPoint)
};


function reduceToAllTrue(sourceArray) {
   return sourceArray.reduce((acc, next) => {
        return next == false ? false : true 
    });
};

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((acc, next) => {
        return next == true ? true : false 
    })
}