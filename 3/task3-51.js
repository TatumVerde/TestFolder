let A = parseInt(prompt('Введіть чотирьохзначне число'))

let thousands = Math.floor(A / 1000)

let hundreds = Math.floor((A % 1000) / 100)

let tens = Math.floor(A % 100 / 10)

let single = A % 10

let result = thousands == single && tens == hundreds

alert(result)