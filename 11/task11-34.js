let n = parseInt(prompt('Введіть число'));

let arr = new Array(n)

let str = ''

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 2)
    str = str + arr[i]
}

let arr2 = str.split('')
let str2 = ''

for(i = arr2.length -1; i >= 0; i--) {
    str2 = str2 + arr2[i]
}


alert(str + ' ' + str2)