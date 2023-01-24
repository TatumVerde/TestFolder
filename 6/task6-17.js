let prise = parseInt(prompt('Введіть ціну одного кг цукерок'));

for (i = 1; i <= 20; i++) {
    console.log(i * 0.2 + ' кг - ' + prise * i * 0.2 + ' грн')
}