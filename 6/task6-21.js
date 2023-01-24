let n = parseInt(prompt('Введіть число'));

let sum = 1

for (i = 2; i <= n; i++) {
    sum = sum + 1 / i
}

console.log(sum)