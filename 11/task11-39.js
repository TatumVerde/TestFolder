let example = prompt('Введіть приклад словами, а операцію вкажіть символом');

alert(toNum(example))

function toNum(string) {
    let arr = string.split(' ')
    let strNumArr = ['нуль', 'один', 'два', 'три', 'чотири', 'пять', 'шість', 'сім', 'вісім', 'девять',
        'десять', 'одинадцять', 'дванадцять', 'тринадцять', 'чотирнадцять', 'пятнадцять',
        'шістнадцять', 'сімнадцять', 'вісімнадцять']

    let x = strNumArr.indexOf(arr[0])
    let y = strNumArr.indexOf(arr[2])
    let result = 0

    if (arr[1] == 'плюс') {
        result = x + y
    } else if (arr[1] == 'мінус') {
        result = x - y
    }

    return strNumArr[result]
}

