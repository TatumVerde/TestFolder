let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        arr[i] = arr[i].toUpperCase()
    } else if (i % 2 == 1) {
        arr[i] = arr[i].toLowerCase()
    }
    str = str + arr[i] + ' '
}
  
alert(str)