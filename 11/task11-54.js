let words = prompt('Введіть текст');
let numb = parseInt(prompt('Введіть число'));

alert(abrv(words, numb))

function abrv(str, n) {
    let arrWords = str.split(' ')
    let string = ''
    for (i = 0; i < arrWords.length; i++) {
        let arrLett = arrWords[i].split('')
        if (n < 7) {
            n = 7
        }
        if (arrLett.length >= n) {
            string = string + arrLett[0] + arrLett[1] + arrLett[2] + '-' 
            string = string + arrLett[arrLett.length - 2] + arrLett[arrLett.length - 1]
        } else {
            string = string + arrWords[i]
        }
       string = string + ' '
    }
    return string
}