let words = prompt('Введіть речення');

let vowels = 'аоуеиіяюєїАОУЕИІЇЯЮЄ'

alert(waveText(words))

function waveText(str) {
    let arrWords = words.split(' ')
    let string = ''
    for (i = 0; i < arrWords.length; i++) {
        let arrLett = arrWords[i].split('')
        if (vowels.includes(arrLett[0])) {
           for (j = 0; j < arrLett.length - 1; j = j + 2) {
                string = string + arrLett[j].toLowerCase()
                string = string + arrLett[j + 1].toUpperCase()
           }
           if (arrLett.length % 2 == 1) {
                string = string + arrLett[arrLett.length - 1].toLowerCase()
           } else {
                string = string + arrLett[arrLett.length - 1].toUpperCase()
           }
        } else {
            for (j = 0; j < arrLett.length - 1; j = j + 2) {
                string = string + arrLett[j].toUpperCase()
                string = string + arrLett[j + 1].toLowerCase()
           }
           if (arrLett.length % 2 == 1) {
                string = string + arrLett[arrLett.length - 1].toUpperCase()
           } else {
                string = string + arrLett[arrLett.length - 1].toLowerCase()
           }
        }
        string = string + ' '
    }
    return string
}