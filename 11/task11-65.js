const form = document.querySelector('#form')
const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()
    
    output.innerHTML = howOld()
    
    input.value = ''
}

function howOld(menYears, womenYears) {
    menYears = [20, 30, 40, 50, 22]
    womenYears = [30, 31, 23, 8, 24]
    let sum = new Array(5)
    for (i = 0; i < 5; i++) {
        if ((menYears[i] + womenYears[i]) >= 60) {
            sum[i] = true
        } else if ((menYears[i] + womenYears[i]) < 60) {
            sum[i] = false
        }
    }
    return sum
}