let a = parseInt(prompt("Введіть трьохзначне число"))

let hundreds = Math.floor(a / 100)

let tens = Math.floor(a % 100 / 10)

let singles = a % 10

let reverse = singles * 100 + tens * 10 + hundreds

alert("Відповідь = " + reverse)