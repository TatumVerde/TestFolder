const form = document.querySelector('#form')
const input = document.querySelector('#input')
const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    
    let row = input.value
    output.innerHTML = inRow(row)
    input.value = ''
}

function inRow(str) {
    let arr = str.split('')
    let countZeros = 0
    let countOnes = 0

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            countZeros++
            countOnes = 0
            if (countZeros >= 7) {
                break
            }
        } else if(arr[i] == 1) {
            countOnes++
            countZeros = 0
            if (countOnes >= 7) {
                break
            }
        }
    }

    if (countZeros >= 7 || countOnes >= 7) {
        return 'так'
    } else {
        return 'ні'
    }
}