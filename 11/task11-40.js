let str = prompt('Введіть текст');

alert(abr(str))

function abr(str) {
    let arr = str.split(' ');
    let string = ''
    for (i = 0; i < arr.length; i++) {
        let arrLett = arr[i].split('')
        if (arrLett.length > 10) {
            string = string + arrLett[0]
            string = string + (arrLett.length - 2)
            string = string + arrLett[arrLett.length - 1] + ' '
        } else {
            string = string + arr[i] + ' '
        }
    }
    return string
}