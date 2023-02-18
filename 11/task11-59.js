const form = document.querySelector('#form')

const begin = document.querySelector('#begin')
const end = document.querySelector('#end')
const step = document.querySelector('#step')

const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()

    let beginNumber = parseInt(begin.value)
    let endNumber = parseInt(end.value)
    let stepNumber = parseInt(step.value)

    console.log(series(beginNumber, endNumber, stepNumber))

    output.innerHTML = series(beginNumber, endNumber, stepNumber)

    input.value = ''
}

function series(x1, x2, l) {
    let str = ''
    if (x1 < x2) {
        for (i = x1; i <= x2; i = i + l) {
            str = str + i + ' '
        }
    } else if (x1 > x2) {
        for (i = x1; i > x2; i = i - l) {
            str = str + i + ' '
        }
    }
    return str
}