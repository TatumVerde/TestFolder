const string = prompt('Enter a sentence');
const regex = /\b\w{3}\b/g;

alert(string.replace(regex, ''))