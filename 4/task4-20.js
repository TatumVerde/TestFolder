let massege = 'Введіть число '

let A = parseInt(prompt(massege + 'A'))

let B = parseInt(prompt(massege + 'B'))

let C = parseInt(prompt(massege + 'C'))
/*
if (B - A < C - A) {
    x = B - A 
    alert('B; ' + x)
} else if (C - A < B - A) {
    x = C - A 
    alert('C; ' + x)
}
*/
let Bdist = Math.abs(B - A)
let Cdist = Math.abs(C - A)

if (Bdist < Cdist) {
    alert('Точка B ближе до точки A (' + Bdist + 'см)')
} else if (Cdist < Bdist) {
    alert('Точка C ближе до точки A (' + Cdist + 'см)')
} else {
    alert('точки B і C знаходяться на рівній відстані від точки A(' + Bdist + 'см)')
}