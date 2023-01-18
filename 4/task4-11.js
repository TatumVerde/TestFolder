let massege = 'Введіть число '

let A = parseInt(prompt(massege + 'A'))

let B = parseInt(prompt(massege + 'B'))

if (A == B) {
    A = 0
    B = 0
} else if (A > B) {
    B = A
} else if (B > A) {
    A = B
}

alert(A + '; ' + B)