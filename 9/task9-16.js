let x = parseInt(prompt('Введіть число'))

number(x)

function number(x) {
    if (x > 0) {
        alert('Число додатнє')
    } else if (x == 0) {
        alert('Число ні додатнє, ні відємне')
    } else {
        alert('Число відємне')
    }
}