let words = prompt('Введіть речення');

let arr = words.split('');

let count = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] != ' ') {
        count++
    }
}

alert(count)