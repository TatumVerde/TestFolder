let x = parseInt(prompt('Введіть число'))

if (x > 0) {
    x = x + 1
} else if (x < 0) {
    x = x - 2 
} else if (x == 0) {
    x = 10
}
alert(x)
