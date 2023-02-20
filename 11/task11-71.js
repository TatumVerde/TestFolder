let a = parseInt(prompt('Введіть число а'))
let n = parseInt(prompt('Введіть степінь числа а'))

let arrSt = []

for (i = 1; i <= n; i++) {
    arrSt.push(Math.pow(a, i))
}
alert(arrSt)