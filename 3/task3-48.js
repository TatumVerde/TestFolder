let A = parseInt(prompt('Введіть число А'))

let hundreds = Math.floor(A / 100)

let tens = Math.floor(A % 100 / 10)

let single = A % 10

let different = hundreds != tens && tens != single && single != hundreds

alert(different)