let A = parseInt(prompt('Введіть число А'))

let B = parseInt(prompt('Введіть число В'))

let isSameParity = (A % 2 > 0 && B % 2 > 0) || (A % 2 == 0 && B % 2 == 0)

alert(isSameParity)