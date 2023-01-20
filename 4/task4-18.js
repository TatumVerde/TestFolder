let massege = 'Введіть число '

let a = parseInt(prompt(massege + 'a'))

let b = parseInt(prompt(massege + 'b'))

let c = parseInt(prompt(massege + 'c'))

if (a == b && a != b) {
    alert(3)
} else if (a == c && a != c) {
    alert(2)
} else if (b == c && b != c) {
    alert(1)
} else {
    alert('Нема рівних чисел')
}