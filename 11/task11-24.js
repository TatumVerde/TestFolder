let words = prompt('Введіть речення');
let char = prompt('Введіть символ');

if (words.lastIndexOf(char)) {
    alert(words.lastIndexOf(char))
} else if (words.lastIndexOf(char) == -1) {
    alert('Нема такого символа')
}
