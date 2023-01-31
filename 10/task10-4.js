let arr = new Array(20);

let j = 20

for (i = 0; i < arr.length; i++) {
    arr[i] = j
    j--
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}