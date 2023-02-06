let words1 = prompt('Введіть речення');
let words2 = prompt('Введіть друге речення');

if (words1.length < words2.length) {
    alert(words1.padEnd(words2.length, '*'))
} else {
    alert(words2.padEnd(words1.length, '*'))
}