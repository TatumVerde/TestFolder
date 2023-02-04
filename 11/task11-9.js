let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
    let arrLetters = arr[i].split('')
    let count = 0;
    for (j = 0; j < arrLetters.length; j++) {
        if (arrLetters[j] == 'а' || 
            arrLetters[j] == 'о' ||
            arrLetters[j] == 'у' ||
            arrLetters[j] == 'е' ||
            arrLetters[j] == 'и' ||
            arrLetters[j] == 'і' ||
            arrLetters[j] == 'ї' ||
            arrLetters[j] == 'я' ||
            arrLetters[j] == 'ю' ||
            arrLetters[j] == 'є' ) {
            count++
        }
    }
    str = str + count + ' '
}

alert(str)