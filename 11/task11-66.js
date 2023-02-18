const form = document.querySelector('#form')

let n = prompt('n')
let arrNames = new Array(n)
let arrAges = new Array(n)

for (i = 0; i < n; i++) {
    arrNames[i] = prompt('Введіть імя')
    arrAges[i] = parseInt(prompt('Введіть вік'))
}

alert(are18(arrNames, arrAges))


function are18(Names, Ages) {
    let str = ''
    for (i = 0; i < Names.length; i++) {
        if (Ages[i] >= 18) {
            str = str + Names[i] + '; '
        }
    }
    return str
}