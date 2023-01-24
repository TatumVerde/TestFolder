let a = parseInt(prompt('Введіть число а'));

let b = parseInt(prompt('Введіть число b'));

let count = 0

for (i = b - 1; i > a; i--) {
    console.log(i);
    count++;
}

console.log('Кількість чисел = ' + count);