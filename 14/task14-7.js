const string = prompt('Enter a string');

console.log(array(string))

function array(str) {
    const regex = /(htpps?:\/\/[^\s]+)/g;
    return str.match(regex);
}