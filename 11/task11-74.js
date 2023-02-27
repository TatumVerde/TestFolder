let binNumb = prompt('Введіть число в двійковій системі')

let decimalNumb = parseInt(binNumb, 2)
let octalNumb = decimalNumb.toString(8)
let hexNumb = decimalNumb.toString(16)

alert(binNumb + ' ' + octalNumb + ' ' + decimalNumb + ' ' + hexNumb)