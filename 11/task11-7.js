let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
     str = str + arr[i].split('').length + ' '
}

alert(str)