let y1 = parseInt(prompt('Введіть початок числового рядка'))
let y2 = parseInt(prompt('Введіть кінець числового рядка'))
let str = ''

alert(series(y1, y2))

function series(x1, x2) {
    if (x1 < x2) {
        for (i = x1; i <= x2; i++)
        str = str + i + ' '
    } else if (x1 > x2) {
        for (i = x1; i >= x2; i--) {
         str = str + i + ' '
        } 
    } else {
        str = x1 + ' ' + x2
    }
    return str
}