let N = parseInt(prompt('Введіть число місяця від 1 до 12'));

 switch(N) {
    case 12 :
    case 1 :
    case 2 : 
        alert('Зима');
        break
    case 3 :
    case 4 :
    case 5 : 
        alert('Весна');
        break
    case 6 :
    case 7 :
    case 8 : 
        alert('Літо');
        break
    case 9 :
    case 10 :
    case 11 :
         alert('Осінь');
    default : alert('Такого місяця не існує');
 }