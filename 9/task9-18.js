let word = prompt('Введіть слово')

let n = parseInt(prompt('Введіть число'))

let result = outPut(word, n)

function outPut(word, n) {
    let str = ''
    for(i = 0; i < n; i ++) {
        str = str + word + ''
    }
    return str
}

alert(str)