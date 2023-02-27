let n = parseInt(prompt('Введіть число'))
let s = parseInt(prompt('Введіть систему числення'))
let result 

if (s == 2) {
    result = n.toString(2)
} else if (s == 8) {
    result = n.toString(8)
} else if (s == 16) {
    result = n.toString(16)
} else if (s == 10) {
    result = n
}

alert(result)