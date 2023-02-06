let n = parseInt(prompt('Введіть число'));

let arr = new Array(n)

let str = ''
let str2 = ''

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 2)
    str = str + arr[i]
}

for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        arr[i] = 1
    } else if (arr[i] == 1) {
        arr[i] = 0
    }
    str2 = str2 + arr[i]
}

alert(str + ' ' + str2)