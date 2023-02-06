let words = prompt('Ввеідть речення');

let arr = words.slice('');

let str = ''

for (i = arr.length - 1; i >= 0; i--) {
    str = str + arr[i]
}

alert(str)