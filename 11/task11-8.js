let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
    arrLetters = arr[i].split('')
    let count = 0
    for (j = 0; j < arrLetters.length; j++) {
        if (arrLetters[j] == 'а') {
            count++
        }
    }
    str = str + count + ' '
}


alert(str)