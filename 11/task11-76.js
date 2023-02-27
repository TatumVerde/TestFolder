let hexNumb = prompt('Введіть число у 16ковій системі числення')

let decimalNumb = parseInt(hexNumb, 16)
let binaryNumb = decimalNumb.toString(2)
let octalNumb = decimalNumb.toString(8)

alert(binaryNumb + ' ' + octalNumb + ' ' + decimalNumb + ' ' + hexNumb)