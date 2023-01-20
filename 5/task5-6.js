let L = parseInt(prompt('Введіть довжину'));

let N = parseInt(prompt('Введіть 1 якщо число в дц; 2 якщо число в км; 3 якщо в м; 4 якщо в мл; 5 якщо в см'));

let result;

switch (N) {
    case 1 : result = L / 10;
        break;
    case 2 : result = L * 100;
        break;
    case 3 : result = L;
        break;
    case 4 : result = L / 1000;
        break;
    case 5 : result = L / 100;
        break;
        default : result = 'Такої команди не існує'
}

alert(result + 'м')