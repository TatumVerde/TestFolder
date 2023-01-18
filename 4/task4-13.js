let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

if (a < b && b < c || a > b && b > c) {
    alert(b)
} else if (b < a && a < c || b > a && a > c) {
    alert(a)
} else if (c < a && a < c || c > a && a > c) {
    alert(c)
}

