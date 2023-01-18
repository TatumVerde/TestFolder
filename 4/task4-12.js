let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

if (a < b && a < c) {
    alert(a)
} else if (b < a && b < c) {
    alert(b)
} else if (c < a && c < b) {
    alert(c)
}