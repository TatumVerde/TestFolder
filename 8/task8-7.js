let userName = prompt('Введіть своє імя');

let time = parseInt(prompt('Введіть час дня'));

let greeting = time < 12 ? 'Добрий ранок' : 'Добрий день'

alert(greeting + ', ' + userName)