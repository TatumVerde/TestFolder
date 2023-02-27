const name = prompt('Введіть імя та призвіще');
const x = prompt('Виберіть одну дію: +, -, *, /');

if (x == '+') {
    alert(procc(name, plus))
} else if (x == '-') {
    alert(procc(name, minus))
} else if (x == '*') {
    alert(procc(name, mult))
} else if (x == '/') {
    alert(procc(name, div))
}


function plus(a, b) {
    return a + b
};

function minus(a, b) {
    return a - b
};

function mult(a, b) {
    return a * b
};

function div(a, b) {
    return a / b
};


function procc(fullName, func) {
    const letters = fullName.split(' ')
    const a = letters[0].length
    const b = letters[1].length 
    return func(a, b)
}
