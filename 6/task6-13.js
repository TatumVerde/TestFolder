let a = parseInt(prompt('Ведіть число а'));

let b = parseInt(prompt('Введіть число b'));

//let c = b - a + 1

let count = 0

for (i = a; i <= b; i++) {
    console.log(i);
    count++;
}

console.log('Кількість чисел = ' + count);