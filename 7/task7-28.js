let a = parseInt(prompt('Введіть відрізок а'));

let b = parseInt(prompt('Введіть відрізок b'));

let count = 0

while (a >= b) {
    a = a - b
    count++
}

console.log('Кількість відрізків b в а = ' + count)