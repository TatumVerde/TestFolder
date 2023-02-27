let a = prompt('Введіть число у вісімковій системі числення а')
let b = prompt('Введіть число у вісімковій системі числення b')

let decimalA = parseInt(a, 8)
let decimalB = parseInt(b, 8)

let sum = decimalA + decimalB
let differ = decimalA - decimalB
let prod = decimalA * decimalB
let frac = decimalA / decimalB

let octSum = sum.toString(8)
let octDiff = differ.toString(8)
let octProd = prod.toString(8)
let octFrac = frac.toString(8)

alert('сума ' + octSum +  '; різниця ' + octDiff + '; добуток ' + octProd + '; частка' + octFrac)