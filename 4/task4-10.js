let massege = 'Введіть число '

let A = parseInt(prompt(massege + 'A'))

let B = parseInt(prompt(massege + 'B'))

if (A == B) {
    A = 0
    B = 0
} else if (A != B) {
   let T = A 
    A = A + B
    B = B + T
} 

alert(A + '; ' + B)