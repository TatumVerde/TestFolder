let words = prompt('Введіть речення');

if (words.startsWith('Привіт') && words.endsWith('.')) {
    alert('Речення починається з "Привіт" та закінчується крапкою')
} else if (words.endsWith('.')) {
    alert('Речення закінчується крапкою')
} else if (words.startsWith('Привіт')) {
    alert('Речення починається з "Привіт"')
} else {
    alert('Речення не починається зі слова "Привіт", та не закінчується крапкою')
}