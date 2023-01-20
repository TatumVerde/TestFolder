let x = parseInt(prompt('Введіть х'))

let y = parseInt(prompt('Введіть у'))

if (x == 0 && y == 0) {
    alert(0)
} else if (x == 0 && y != 0) {
    alert(2)
} else if (y == 0 && x != 0) {
    alert(1)
} else if (x != 0 && y != 0) {
    alert(3)
}