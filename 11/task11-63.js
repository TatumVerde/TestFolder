const form = document.querySelector('#form')
const output = document.querySelector('#output')

form.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()

    output.innerHTML = norm()

    input.value = ''
}

function norm(height, weight, gender) {
    height = [195, 195, 190, 185, 170, 165, 169, 179, 189, 199]
    weight = [95, 94, 93, 92, 91, 90, 35, 45, 60, 130]
    gender = [true, false, true, false, true, false, true, false, true, false]
    let result
    let rejection = []
    for (i = 0; i < 10; i++) {
        if (height[i] - 100 != weight[i] && gender[i] == true) {
            if ((height[i] - 100) > weight[i]) {
                result = (height[i] - 100) - weight[i]
                rejection.push(' Чоловік: +' + result + 'кг')
            } else if ((height[i] - 100) < weight[i]) {
                result = weight[i] - (height[i] - 100)
                rejection.push(' Чоловік: -' + result + 'кг')
            }
        }if (height[i] - 110 != weight[i] && gender[i] == false) {
            if ((height[i] - 110) > weight[i]) {
                result = (height[i] - 110) - weight[i]
                rejection.push(' Жінка: +' + result + 'кг')
            } else if ((height[i] - 110) < weight[i]) {
                result = weight[i] - (height[i] - 110)
                rejection.push(' Жінка: -' + result + 'кг')
            }
        }if (height[i] - 100 == weight[i] && gender[i] == true) {
            rejection.push(' Чоловік: вага в нормі')
        }if (height[i] - 110 == weight[i] && gender[i] == false) {
            rejection.push(' Жінка: вага в нормі')
        }
    }
    return rejection
}
