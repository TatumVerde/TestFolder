while (true) {
    let str = prompt('Введіть речення')
    if (str == 'вихід') {
        break;
    }
    alert('кількість символів: ' + countSymb(str) + 
        ' Кількість букв: ' + countLett(str) + 
        ' Сума всіх цифр: ' + sumNumbers(str))
}

function countSymb(str) {
    let arr = str.split('')
    return arr.length
}

function countLett(str) {
    let arr = str.split('')
    let letters = 'йцукенгшщзхїєждлорпавіфячсмитьбюЙЦУКЕНГШЩЗХЇЄЖДЛОРПАВІФЯЧСМИТЬБЮ' 
    let count = 0

    for (i = 0; i < arr.length; i++) {
        if (letters.includes(arr[i])) {
            count++
        } 
    }
    return count
}

function sumNumbers(str) {
    let figures = '1234567890'
    let sum = 0;
    let arr = str.split('')
    for (i = 0; i < arr.length; i++) {
        if (figures.includes(arr[i])) {
            sum = sum + parseInt(arr[i]) 
        }
    }
    return sum
}

