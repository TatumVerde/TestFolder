let str = prompt('Введіть ряд чисел');

alert(double(str))

function double(string) {
    let arr = string.split(' ')
    let str = ''
    for (i = 0; i < arr.length; i++) {
        str = str + (parseInt(arr[i]) * 2) + ' '
    }
    return str
}