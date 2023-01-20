let N = parseInt(prompt('Введіть число від 1 до 12'));

switch (N) {
    case 1 :
    case 3 :
    case 5 :
    case 7 :
    case 8 :
    case 10 :
    case 12 :
        alert('Цей місяць має 31 день');
        break
    case 4 :
    case 6 :
    case 9 :
    case 11 :
        alert('Цей місяць має 30 днів');
        break
    case 2 :
        alert('Цей місяць має 28 днів');
        break 
        default : alert('Такого місяця не існує');
}