let a = parseInt(prompt('Введіть відрізок а'));

let b = parseInt(prompt('Введіть відрізок b'));
/*
while (a >= b) {
    a = a - b;
} 
*/

do {
    a = a - b;
} while (a >= b)

console.log('Незайнята частина відрізка = ' + a + ' см')


