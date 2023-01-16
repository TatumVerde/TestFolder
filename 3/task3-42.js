let massege = 'Ведіть число'

let A = parseInt(prompt(massege + ' А'))

let B = parseInt(prompt(massege + ' В'))

let C = parseInt(prompt(massege + ' С'))

let isMore = A > 0 && B < 0 && C < 0 || B > 0 && A < 0 && C < 0 || C > 0 && A < 0 && B < 0

alert(isMore)