let a = parseInt(prompt("Введіть трьохзначне число"))

let tens = Math.floor(a % 100 / 10)

let singles = a % 10

let f = singles * 10 + tens

alert("Відповідь = " + f)