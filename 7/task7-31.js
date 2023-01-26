let n = parseInt(prompt('Введіть число'));

let i = 0

while (i < 20) {
     if (n == 2**i ){
        break;
    }
    i++
}
alert(i)