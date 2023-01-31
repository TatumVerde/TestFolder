let arr = new Array(30);

let s = 'a'

for (i = 0; i < arr.length; i++) {
    arr[i] = s
    s = s + 'a'
}

for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}