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
    let str = input.value

    

    // Вивід, того що ввів користувач
    output.innerHTML = str

    // Очистка поля вводу
    input.value = ''
}
