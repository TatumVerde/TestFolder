let x = parseInt(prompt('Введіть х'))

let y = parseInt(prompt('Введіть у'))

if (x > 0 && y > 0) {
    alert('Точка знаходиться в І четверті')
} else if (y > 0 && x < 0) {
    alert('Точка знаходиться в ІІ четверті')
} else if (x < 0 && y < 0) {
    alert('Точка знаходиться в ІІІ чeтверті')
} else if (y < 0 && x > 0) {
    alert('Точка знаходиться в ІV четверті')
}