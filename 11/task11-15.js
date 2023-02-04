let words = prompt('Ведіть речення');
let arr = words.split('');

let letters = 'абвгдеєжзиіїйклмнопрстуфхцчшщїюяАБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ';
let figure = '1234567890';
let vowels = 'аоуеиіїяюєАОУЕИІЯЮЄЇ';
let consonant = 'йцкнгшщзхфвпрлджчсмтьбЙЦКНГШЩЗХФВПРЛДЖЧСМТЬБ';

let countSymb = arr.length;
let countLett = 0;
let countFig = 0;
let countVow = 0;
let countCons = 0;
let countDots = 0;
let countComas = 0;
let countSpaces = 0;

for (i = 0; i < arr.length; i++) {
    if (letters.includes(arr[i])) {
        countLett++
    } 
    if (figure.includes(arr[i])) {
        countFig++
    } 
    if (vowels.includes(arr[i])) {
        countVow++
    } 
    if (consonant.includes(arr[i])) {
        countCons++
    } 
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

alert('Символів: ' + countSymb + 
    ', Букв: ' + countLett +
    ', Цифр: ' + countFig + 
    ', Голосних букв: ' + countVow + 
    ', Приголосних букв: ' + countCons + 
    ', Крапок: ' + countDots +
    ', Ком: ' + countComas + 
    ', Пробілів: ' + countSpaces)