const array = ['1', '2', '3', '4', '5']

function calculate(numArray, callback) {
    let result = []
    for (i = 0; i < 5; i++) {
        result.push(callback(numArray[i]))
    }
    return result
}

function toSquare(numArray) {
    return numArray * numArray
}

console.log(calculate(array, toSquare))