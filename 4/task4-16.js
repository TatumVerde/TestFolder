let massege = 'Введіть число '

let A = parseInt(prompt(massege + 'A'))

let B = parseInt(prompt(massege + 'B'))

let C = parseInt(prompt(massege + 'C'))

if (A < B && B < C) {
    A = A * 2
    B = B * 2
    C = C * 2
} else {
    A = A * -1
    B = B * -1
    C = C * -1
}
   
 alert(A + '; ' + B + '; ' + C)