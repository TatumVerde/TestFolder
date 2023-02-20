let n = parseInt(prompt('Введіть число'))

let arrNumb = new Array(n)

let str = ''

for (i = 1; i < n; i = i + 2) {
    arrNumb[i] = i
    str = str + arrNumb[i] + ' '
}

alert(str)