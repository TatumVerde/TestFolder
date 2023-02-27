let octalNumb = prompt('Введіть число у вісімковій системі числення')

let decimalNumb = parseInt(octalNumb, 8)
let binaryNumb = decimalNumb.toString(2)
let hexNumb = decimalNumb.toString(16)

alert(binaryNumb + ' ' + octalNumb + ' ' + decimalNumb + ' ' + hexNumb)