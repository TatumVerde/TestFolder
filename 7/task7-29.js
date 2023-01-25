let n = parseInt(prompt('Введіть число n'));

let k = parseInt(prompt('Введіть число k'));

let count = 0;

while (n >= k) {
    n = n - k
    count++
}

alert('Частка = ' + count + '; Остача = ' + n)