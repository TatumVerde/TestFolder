let a = parseInt(prompt("Введіть трьохзначне число"))

let hundreds = Math.floor(a / 100)

let tens = Math.floor(a % 100 / 10)

let singles = a % 10

let summary = hundreds + tens + singles

let product = hundreds * tens * singles

alert("Сума = " + summary + " Добуток = " + product)