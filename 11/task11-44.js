let str = prompt('Введіть кількість чисел');

let arr = str.split(' ')

for (i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i])
}

let arrSquare = square(arr)

let str1 = ''

for (i = 0; i < arrSquare.length; i++) {
    str1 = str1 + arrSquare[i] + ' '
}

alert(str1)

function square(array) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i]**2
    }
    return array
}