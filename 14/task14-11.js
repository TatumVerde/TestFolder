const string = prompt('Enter a sentence');

console.log(isLat(string))

function isLat(str) {
    const regex = /^[a-zA-Z]+$/g;
    return regex.test(str)
}