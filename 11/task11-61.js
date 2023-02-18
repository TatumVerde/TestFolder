const form = document.querySelector('#form')
const input = document.querySelector('#input')
const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    
    event.preventDefault()

    let word = input.value

    output.innerHTML = reg(word)

    input.value = ''
}

function reg(str) {
    let smallLett = 'йцукенгшщзхїєждлорпавіфячсмитьбю'
    let bigLett = 'ЙЦУКЕНГШЩЗХЇЄЖДЛОРПАВІФЯЧСМИТЬБЮ'
    let count1 = 0
    let count2 = 0

    let arrSmall = str.split('')
    let arrBig = str.split('')

    for (i = 0; i < arrSmall.length; i++) {
        if (smallLett.includes(arrSmall[i])) {
            count1++
        }
    }
    for (i = 0; i < arrBig.length; i++) {
        if (bigLett.includes(arrBig[i])) {
            count2++
        }
    }

    let string = ''

    if (count1 > count2) {
        string = str.toLowerCase()
    } else if (count1 < count2) {
        string = str.toUpperCase()
    } else if (count1 == count2) {
        string = str.toLowerCase()
    }

    return string    
}