let n = parseInt(prompt('Введіть кількість задач'));

count = 0

for (i = 0; i < n; i++) {
    str = prompt('Введіть три значення');
    let arr = str.split(' ')
    if (parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]) >= 2) {
        count++
    }
}

alert(count)