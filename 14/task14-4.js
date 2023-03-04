const str = prompt('Введіть рядок')
const regex = /[\D]/g
const arr = str.replace(regex, '')
const array = arr.split('')
let string = ''

for (i = 0; i < array.length; i++) {
    string += array[i] + ' '
}

alert(string)