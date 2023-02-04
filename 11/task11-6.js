let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i = i + 2) {
    str = str + arr[i] + ' '
}

alert(str)