let str = prompt('Введіть речення');

alert(wordsCount('gfgf vgvg bhbh'))
alert(wordsCount('мама папа'))
alert(wordsCount(str))

function wordsCount(string) {
    let arr = string.split(' ')
    return arr.length
}
