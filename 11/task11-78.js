let a = prompt('Введіть двоїчне число а')
let b = prompt('Введіть двоїчне число b')

let decimalNumb1 = parseInt(a, 2)
let decimalNumb2 = parseInt(b, 2)

let sum = decimalNumb1 + decimalNumb2
let differ = decimalNumb1 - decimalNumb2
let product = decimalNumb1 * decimalNumb2
let fraction = decimalNumb1 / decimalNumb2

let binSum = sum.toString(2)
let binDiff = differ.toString(2)
let binProd = product.toString(2)
let binFrac = fraction.toString(2)

alert('сума ' + binSum +  '; різниця ' + binDiff + '; добуток ' + binProd + '; частка ' + binFrac)