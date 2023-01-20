let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

let d = parseInt(prompt(massege + 'd'))

if (a == b && b == c && a != d) {
    alert(4)
} else if (a == b && b == d && a != c) {
    alert(3)
} else if (a == c && c == d && a != b) {
    alert(2)
} else if (b == c && c == d && b != a) {
    alert(1)
} else {
    alert('Числа різні або всі числа однакові')
}