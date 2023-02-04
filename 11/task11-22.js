let words = prompt('Введіть речення');

let char = prompt('Введіть символ');

if (words.indexOf(char)) {
    alert(words.indexOf(char))
} else if (words.indexOf(char) == -1) {
    alert('Нема такого символа')
}