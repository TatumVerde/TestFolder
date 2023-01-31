let n = parseInt(prompt('Введіть число'));

let arr = new Array(n);

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() *11)
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('');

let arr2 = new Array(n);

for (i = 0; i < arr2.length; i++) {
    arr2[i] = Math.floor(Math.random() *11)
}

for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

console.log('');

let arr3 = new Array(n);

for (i = 0; i < arr3.length; i++) {
    arr3[i] = arr[i] + arr2[i]
}

for (i = 0; i < arr3.length; i++) {
    console.log(arr3[i])
}