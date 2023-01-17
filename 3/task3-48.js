/* Boolean 20
Дано трехзначное число. Проверить истинность высказывания:
«Все цифры данного числа различны». */

let A = parseInt(prompt('Введіть число А'))

let hundreds = Math.floor(A / 100)

let tens = Math.floor(A % 100 / 10)

let single = A % 10

let different = hundreds != tens && tens != single && single != hundreds

alert(different)

// правильно, але ти забула написати html Документ. Це означає що ти даже
// не запускала цю програмку, хоча вона правильно написана. Я дописав html