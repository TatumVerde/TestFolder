let str = ''

let n = ''

let sum = 0

let i = 0

let arr = []

while (true) {
    n = parseInt(prompt('Введіть число'))
    if (n == -1) {
        break
    }
    str = str + n + ' '
    arr[i] = n
    i++
} 
 

for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i] 
}

alert(str + '; ' + sum / arr.length)