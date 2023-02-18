let str = ''

let date = ''

while (true) {
    date = prompt('Введіть дату та підпис')
    let arr = date.split(' ');
    if (date == 'кінець') {
        break
    }
    str = str + arr[1] + ' ' + arr[0] + '; '
}
alert(str)