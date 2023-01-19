let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

/*
if (a > b && b > c || a < b && b > c) {
    x = a + b 
} else if (a < b && b < c) {
    x = b + c
} else if (a > b && b < c) {
    x = a + c
}

alert('Сума = ' + x)

*/

let summ = 0

if (a > b) {
    summ = summ + a
    if (c > b) {
        summ = summ + c
    } else {
        summ = summ + b
    }
} else if (b > a) {
    summ = summ + b
    if (c > a) {
        summ = summ + c
    } else {
        summ = summ + a
    }
}

alert(summ)