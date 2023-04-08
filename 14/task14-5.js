const sentence = prompt('Enter a sentense, please');
const firstWord = prompt('Enter a first word, please');
const secondWord = prompt('Enter a second word, please');

const regex = new RegExp(firstWord, 'g');
const newSnt = sentence.replace(regex, secondWord);

alert(newSnt)