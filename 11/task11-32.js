let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
    wordArr = arr[i].split('')
    for (j = wordArr.length - 1; j >= 0; j--) {
        str = str + wordArr[j]
    }
    str = str + ' '
} 

alert(str)