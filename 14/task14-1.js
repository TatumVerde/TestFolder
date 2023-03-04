const string = prompt('Введіть речення');
const word = prompt('Введіть слово');
const regex = new RegExp(word)

console.log(regex.test(string))