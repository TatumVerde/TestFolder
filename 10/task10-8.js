let n = parseInt(prompt('Введіть число'));

let arr = new Array(n)

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 101)
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

let arr2 = new Array(n)

for (i = 0; i < arr2.length; i++) {
    arr2[i] = arr[i] * 2
}

for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}