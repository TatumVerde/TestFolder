let x = parseInt(prompt('Введіть число х'))

let operation = prompt('Виберіть команду: +; -; *; /')

let y = parseInt(prompt('Введіть число у'))

alert(result(x, operation, y))

function result(x, operation, y) {
   if (operation == '+') {
       return x + y
   } else if (operation == '-') {
        return x - y
   } else if (operation == '*') {
        return x * y
   } else if (operation == '/') {
        return x / y
   } else {
        alert('Помилка')
   }
} 