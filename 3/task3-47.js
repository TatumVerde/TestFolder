/* Boolean 19
Проверить истинность высказывания: «Среди трех данных целых
чисел есть хотя бы одна пара взаимно противоположных». */

let massege = 'Введіть число'

let A = parseInt(prompt(massege + ' A'))

let B = parseInt(prompt(massege + ' B'))

let C = parseInt(prompt(massege + ' C'))

let opposite = A == B * -1 || B == C * -1 || C == A * -1

alert(opposite)

// правильно, але це я тобі допоміг)