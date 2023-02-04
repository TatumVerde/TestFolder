let char = prompt('Введіть слово на англійській мові');

let arr = char.split('');

let str = ''

for (i = 0; i < arr.length; i++) {
    str = str + arr[i].charCodeAt() + ' '
}

alert(str)