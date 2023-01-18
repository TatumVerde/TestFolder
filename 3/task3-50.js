/* Boolean 22
Дано трехзначное число. Проверить истинность высказывания:
«Цифры данного числа образуют возрастающую или убывающую последовательность». */

let A = parseInt(prompt('Введіть число А'))

let hundreds = Math.floor(A / 100) 

let tens = Math.floor(A % 100 / 10)

let single = A % 10

let result = hundreds < tens && tens < single || hundreds > tens && tens > single

alert(result)

// все правильно