let massege = 'Введіть число '

let x1 = parseInt(prompt(massege + 'x1'))

let x2 = parseInt(prompt(massege + 'x2'))

let x3 = parseInt(prompt(massege + 'x3'))

let p = 0

let n = 0

if (x1 > 0) {
    p = p + 1
} else if (x1 < 0) {
    n = n + 1
}

if (x2 > 0) {
    p = p + 1
} else if (x2 < 0) {
    n = n + 1
}

if (x3 > 0) {
    p = p + 1 
} else if (x3 < 0) {
    n = n + 1 
}
 
alert('Додатніх чисел = ' + p + ' Ввідємних чисел = ' + n )