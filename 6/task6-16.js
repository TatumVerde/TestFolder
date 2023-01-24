let prise = parseInt(prompt('Введіть ціну дного кг цукерок'));
/*
for (i = 0.1; i < 1; i = i + 0.1) {
    console.log(i + ' кг - ' + prise * i + ' грн')
}*/

for (i = 1; i <= 10; i++) {
    console.log(i * 0.1 + ' кг - ' + prise * i * 0.1 + ' грн')
} 