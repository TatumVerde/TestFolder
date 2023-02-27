let a = prompt('Введіть число у шістнадцятковій системі числення а')
let b = prompt('Введіть число у шістнадцятковій системі числення b')

let decimalA = parseInt(a, 16)
let decimalB = parseInt(b, 16)

let sum = decimalA + decimalB
let differ = decimalA - decimalB
let prod = decimalA * decimalB
let frac = decimalA / decimalB

let hexSum = sum.toString(16)
let hexDiff = differ.toString(16)
let hexProd = prod.toString(16)
let hexFrac = frac.toString(16)

alert('сума ' + hexSum +  '; різниця ' + hexDiff + '; добуток ' + hexProd + '; частка ' + hexFrac)