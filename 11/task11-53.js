let words = prompt('Ведіть текст');
let numb = parseInt(prompt('Введіть число'));

alert(multChar(words, numb))

function multChar(str, n) {
    let arrWords = words.split(' ')
    let string = ''
    for (i = 0; i < arrWords.length;i++) {
        let arrLett = arrWords[i].split('')
        for (j = 0; j < arrLett.length; j++) {
            string = string + arrLett[j].repeat(numb)
        }
        string = string + ' '
    }
   return string
}