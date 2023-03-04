const str = prompt('Введіть речення');
const regex = /[^a-zA-Z0-9]/g;
const result = str.replace(regex, '');

console.log(result)