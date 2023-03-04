const mail = prompt('Введіть емейл адресу')
const regex = /[\w+]+@[\w+]+\.[\w+]/

if (regex.test(mail)) {
    alert('its ok')
} else {
    alert('this email address have incorrect form')
}