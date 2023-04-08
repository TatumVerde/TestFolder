const string = prompt('Enter your email');

isValid(string)

function isValid(str) {
    const regex = /[\w+]+@[\w+]+\.[\w+]/
    return regex.test(str)
}

if (isValid(string)) {
    alert('Valid email')
} else {
    alert('Invalid email')
}