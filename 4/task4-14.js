let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

/*
if (a > b && b > c) {
    alert(c + '; ' + a)
} else if (a < b && b < c) {
    alert(a + '; ' + c)
} else if (a < b && b > c) {
    alert(c + '; ' + b)
} else if (a > b && b < c) {
    alert(b + '; ' + c)
}
*/

let str = ''

if (a < b && a < c) {
    str = str + a + '; ' 
} else if (b < a && b < c) {
    str = str + b + '; '
} else if (c < a && c < b) {
    str = str + c + '; '
}

if (a > b && a > c) {
    str = str + a
} else if (b > a && b > c) {
    str = str + b
} else if (c > a && c > b) { 
    str = str + c
}

alert(str)