let massege = 'введіть число '

let x1 = parseInt(prompt(massege + 'x1'))

let x2 = parseInt(prompt(massege + 'x2'))

if (x1 > x2) {
    alert(x1)
} else if (x2 > x1){
    alert(x2)
} else {
    alert('x1 = x2')
}