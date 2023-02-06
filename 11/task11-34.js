let n = parseInt(prompt('Введіть число'));

let arr = new Array(n)

let str = ''

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 2)
    str = str + arr[i]
}
alert(str)