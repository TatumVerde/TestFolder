let D = parseInt(prompt('Введіть день місяця'));

let M = parseInt(prompt('Введіть номер місяця')); 

/*
switch (M) {
    case 1 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert(12 + '; ' + 31);
        }
              break; 
    
    case 2 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 31);
        }
              break;
    
    case 3 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 28);
        }
              break;
    
    case 4 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 31)
        }
              break;

    case 5 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 30);
        }
              break;

     case 6 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 31);
        }
              break;

    case 7 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 30);
        }
              break;

    case 8 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 31);
                }
              break;

    case 9 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 31);
        }
              break;

    case 10 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 30);
        }
              break;
                                                         
    case 11 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert(1(M - 1) + '; ' + 31);
        }
              break;
          
    case 12 :
        if(D != 1) {
            alert(M + '; ' + (D - 1));
        } else {
            alert((M - 1) + '; ' + 30);
        }
              break;
    default : alert('Такоі дати не існує')
                         
}

*/


if (D != 1 && D < 31 && D > 0) {
    switch (M) {
        case 1 : alert((D - 1) + ' січня');
            break; 
        case 2 : alert((D - 1) + ' лютого');
            break;
        case 3 : alert((D - 1) + ' березня');
            break;
        case 4 : alert((D - 1) + ' квітня');
            break;
        case 5 : alert((D - 1) + ' травня');
            break;
        case 6 : alert((D - 1) + ' червня');
            break;
        case 7 : alert((D - 1) + ' липня');
            break;
        case 8 : alert((D - 1) + ' серпня');
            break;
        case 9 : alert((D - 1) + ' вересня');
            break;
        case 10 : alert((D - 1) + ' жовтня');
            break;
        case 11 : alert((D - 1) + ' листопада');
            break;
        case 12 : alert((D - 1) + ' грудня');
            break;
        default : alert('Такоі дати не існує');
}
} else if (D == 1) {
    switch(M) {
        case 1 : alert('31 грудня');
            break;
        case 2 : alert('31 січня');
            break;
        case 3 : alert('28 лютого');
            break;
        case 4 : alert('31 березня');
            break;
        case 5 : alert ('30 квітня');
            break;
        case 6 : alert('31 травня');
            break;
        case 7 : alert('30 червня');
            break;
        case 8 : alert('31 липня');
            break;
        case 9 : alert('31 серпня');
            break;
        case 10 : alert('30 вересня');
            break;
        case 11 : alert('31 жовтня');
            break;
        case 12 : alert('30 листопада');
            break;
        default : alert('Такої дати не існує')
    }
} else {
    alert('Такої дати не існує')
}