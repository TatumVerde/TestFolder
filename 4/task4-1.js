/* If 1 
Дано целое число. Если оно является положительным, то прибавить к
нему 1; в противном случае не изменять его. Вывести полученное число. */

// користувач вводить число
let x = parseInt(prompt('Введіть число'))

// якщо воно додатнє, то добавляємо до нього 1
if (x > 0) {
    x = x + 1
}

// виводимо число, яке получилось
alert(x)