let n = parseInt(prompt('Введіть число'));

let arr = new Array(n)

let str1 = ''

let str2 = ''

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 2)
    str1 = str1 + arr[i]
    for(j = str1.length; j >= 0; j--)
    if (j == 0) {
        j == 1
    } else if (j == 1) {
        j == 0
    }
    str2 = str2 + 
  
}


alert(str1 + ' ' + str2)