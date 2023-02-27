let n = parseInt(prompt('Введіть число'))

alert(isPair(n))

function isPair(num) {
    let binNum = num.toString(2)
    let res = ''
    if ((binNum & 1) == 1) {
        res = ' число непарне'
    } else if((binNum & 0) == 0) {
        res = 'число парне'
    }
    return res
}