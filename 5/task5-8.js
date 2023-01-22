let D = parseInt(prompt('Введіть день місяця'));

let M = parseInt(prompt('Введіть номер місяця')); 

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

