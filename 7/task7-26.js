let a = parseInt(prompt('Введіть число a'));

let b = parseInt(prompt('Введіть число b'));

let i = a;

count = 0;

do {
    console.log(i);
    i++
    count++
} while (i <= b);

console.log('кількість чисел = ' + count);