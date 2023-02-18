let word = prompt('Введіть слово') 

let arr = word.split('')

arr[0] = arr[0].toUpperCase()
let str = ''

for (i = 0; i < arr.length; i++) {
    str = str + arr[i] 
}

alert(str)