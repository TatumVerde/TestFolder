// форма відправки
const form = document.querySelector('#form')

// ввід
const input = document.querySelector('#input')

// вивід
const output = document.querySelector('#output')

// прослуховування події відправки форми
form.addEventListener('submit', formHandler)

// функція - реація на подію відправки форми
function formHandler(event) {
    // відміна перезагрузки сторінки при відправці форми
    event.preventDefault();
    
    // Те, що ввів користувач
    let x = parseInt(input.value)

    // Вивід, того що ввів користувач
    output.innerHTML = factorial(x)
   
    // Очистка поля вводу
    input.value = ''
}

function factorial(n) {
    let result = 1
    for (i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}