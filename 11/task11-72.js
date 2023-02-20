let string = prompt('Введіть букви')

let count1 = 0
let count2 = 0

for (i = 0; i < string.length; i++) {
    if (string[i] === 'Т') {
        count1++
    } else if (string[i] === 'В') {
        count2++
    }
}

if (count1 > count2) {
    alert('Таня')
} else if (count1 < count2) {
    alert('Владік')
} else {
    alert('Нічия')
}