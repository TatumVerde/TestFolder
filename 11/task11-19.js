let str = ''

let word = ''

while (true) {
    word = prompt('Введіть слово')
    if (word == 'кінець') {
        break
    }
    str = str.concat(word + ' ')
} 

alert(str)