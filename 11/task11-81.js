let a = prompt('Введіть двоїчне число')

let decimalA = parseInt(a, 2)

let bitwiseNot = ~decimalA

let bitwiseNotBinary = (bitwiseNot >>> 0).toString(2);

alert(bitwiseNotBinary)