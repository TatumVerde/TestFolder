let massege = 'Введіть число '

let x = parseInt(prompt(massege + 'x'))

let y = parseInt(prompt(massege + 'y'))

let z = parseInt(prompt(massege + 'z'))

let result = avr(x, y, z)

function avr(x, y, z) {
     return (x + y + z) / 3
}

alert(result)