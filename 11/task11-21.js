let words = prompt('Введіть речення');
let arr = words.split('');
let arr2 = words.split(' ')

let countDots = 0;
let countComas = 0;
let countSpaces = 0;
let countWord = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] == '.') {
        countDots++
    }
    if (arr[i] == ',') {
        countComas++
    }
    if (arr[i] == ' ') {
        countSpaces++
    }
}

for (j = 0; j < arr2.length; j++) {
    if (arr2[j].includes('як')) {
        countWord++
    }
}



alert('Крапок: ' + countDots +
    ', Ком: ' + countComas +
    ', Пробілів ' + countSpaces +
    ', Cлів "як": ' + countWord)