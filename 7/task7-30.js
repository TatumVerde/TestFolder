let x = parseInt(prompt('Введіть число'));

let i = 0

let isStep = false

while (i < 10) {
    isStep = x == 3**i
    if (isStep) {
        break;
    }
    i++
}

alert(isStep)