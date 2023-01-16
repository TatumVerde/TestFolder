let massege = 'Введіть число'

let A = parseInt(prompt(massege + ' A'))

let B = parseInt(prompt(massege + ' B'))

let C = parseInt(prompt(massege + ' C'))

let isMore = A > 0 && B > 0 && C < 0 || B > 0 && C > 0 && A < 0 || C > 0 && A > 0 && B < 0

alert(isMore)