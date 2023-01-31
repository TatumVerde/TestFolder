let arr = new Array(20);

let odd = 1

for (i = 0; i < arr.length; i++) {
    arr[i] = odd
    odd = odd + 2
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}