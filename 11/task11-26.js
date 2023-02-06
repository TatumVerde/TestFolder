let words = prompt('Введіть речення');

let index = words.search('біля')

if (index == -1) {
    alert('Нема такого слова')
} else {
    alert(index)
}