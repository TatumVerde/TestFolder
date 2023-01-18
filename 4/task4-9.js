let massege = 'Введіть число '

let A = parseInt(prompt(massege + 'A'))

let B = parseInt(prompt(massege + 'B'))

if (A < B) {
    alert(A + '; ' + B)
} else if (A > B) {
    let T = A 
    A = B 
    B = T
    alert(A + '; ' + B)
} else {
    alert('Числа однакові')
}

