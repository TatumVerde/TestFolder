const form = document.querySelector('#form')
const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()

    output.innerHTML = areMerry()

    input.value = ''
  
}

function areMerry(name, status) {
    name = ['Владік-Адольф Гітлер', 'Марі Кюрі', 'Ніфертіті', 'Халк', 'Моналіза']
    status = [true, false, true, false, true]
    let conclusion = []
    for (i = 0; i < 5; i++) {
        if (status[i] == true) {
            conclusion.push(name[i] + ' знаходиться в шлюбі; ')
        } if (status[i] == false) {
            conclusion.push(name[i] + ' вільна людина; ')
        }
    }
    return conclusion
}