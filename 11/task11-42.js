let n = parseInt(prompt('Введіть кількість разів'));

let x = 0;

for (i = 0; i < n; i++) {
    let str = prompt('Введіть команду')
    if (str == 'x++' || str == '++x') {
        x++
    } else if (str == 'x--' || str == '--x') {
        x--
    }
}

alert(x)