let years = parseInt(prompt('Введіть свій вік'))

greeting(years)

function greeting(years) {
    if (years >= 18) {
        alert('Ласкаво просимо')
    } else {
        alert('Доступ заборонено')
    }
}
