function calculate(num1, num2, callback) {
    return callback(num1, num2)
}

function multiply(num1, num2) {
    return num1 * num2
}

console.log(calculate(2, 3, multiply))