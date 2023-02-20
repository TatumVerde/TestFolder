let n = parseInt(prompt('Введіть число'))

let arrSt = new Array(n)

for (i = 1; i <= n; i++) {
    arrSt[i] = 2 **i
}
alert(arrSt)