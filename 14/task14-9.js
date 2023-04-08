const string = prompt('Enter a sentence');
const regex = /\b\w{4,15}\b/g;

alert(string.replace(regex, ''))