const string = prompt('Enter the Password');

isValidPass(string)

function isValidPass(str) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
    return regex.test(str)
}

if (isValidPass(string)) {
    alert('Valid password')
} else {
    alert('Incorrect password')
}