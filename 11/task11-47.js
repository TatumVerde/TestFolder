let n = parseInt(prompt('Введіть число'));

let i = 0;

let sum = 0;

let num = ''

let str = ''

while (i < n) {
    num = prompt('Введіть три числа')
    let arr = num.split(' ')
    sum = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]) 
    str = str + sum + '; '
    i++
}

alert(str)