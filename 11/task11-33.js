let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = arr.length - 1; i >= 0; i--) {
    str = str + arr[i] + ' '
}

alert(str)