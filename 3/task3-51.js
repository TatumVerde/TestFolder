/* Boolean 23
Дано четырехзначное число. Проверить истинность высказывания: «Данное число 
читается одинаково слева направо и справа налево». */

let A = parseInt(prompt('Введіть чотирьохзначне число'))

let thousands = Math.floor(A / 1000)

let hundreds = Math.floor((A % 1000) / 100)

let tens = Math.floor(A % 100 / 10)

let single = A % 10

let result = thousands == single && tens == hundreds
// є ще другий варіант який я показував
// let compare = single * 1000 + tens * 100 + hundreds * 10 + thousands
// let result = A == compare

alert(result)

// Правильнно, але це я тобі виправив, ти щось намудрила з порівнянніми)