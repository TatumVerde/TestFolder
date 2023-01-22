let N = parseInt(prompt('Введіть масу'));

let M = parseInt(prompt('Введіть число 1 якщо кг; 2 якщо мл; 3 якщо гр; 4 якщо т; 5 якщо ц'));

let result;

switch (M) {
    case 1 : result = N;
        break;
    case 2 : result = N / 10000;
        break;
    case 3 : result = N / 1000;
        break;
    case 4 : result = N * 1000;
        break;
    case 5 : result = N * 100;
        break;
        default : result = 'Не існує'

}
alert(result + ' кг')