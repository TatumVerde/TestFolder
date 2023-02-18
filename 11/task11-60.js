const form = document.querySelector('#form')

const begin = document.querySelector('#begin')
const end = document.querySelector('#end')

const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    
    event.preventDefault()

    let beginNumber = parseInt(begin.value)
    let endNumber = parseInt(end.value)

    output.innerHTML = sum(beginNumber, endNumber)

    input.value = ''
}

function sum(m, n) {
    let result = 0
    for (i = m; i <= n; i++) {
        result = result + i
    }
    
    return result
}