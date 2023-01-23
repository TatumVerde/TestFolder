let D = parseInt(prompt('Ведіть день місяця'));

let M = parseInt(prompt('Введіть номер місяця'));

if (D <= 31 && D > 0) {
    switch (M) {
        case 1 : 
            if (D == 31) {
                alert('1 лютого');
            } else {
                alert((D + 1) + ' січня');
            }
            break;
        
        case 2 : 
            if (D == 28) {
                alert('1 березня');
            } else {
                alert((D + 1) + ' лютого');
            }
            break;

        case 3 : 
            if (D == 31) {
                alert('1 квітня');
            } else {
                alert((D + 1) + ' березня');
            }
            break;

        case 4 : 
            if (D == 30) {
                alert('1 травня');
            } else {
                alert((D + 1) + ' квітня');
            }
            break;

        case 5 :
            if (D == 31) {
                alert('1 червня');
            } else {
                alert((D + 1) + ' травня');
            }
            break;

        case 6 :
            if (D == 30) {
                alert('1 липня');
            } else {
                alert((D + 1) + ' червня');
            }
            break;

        case 7 :
            if (D == 31) {
                alert('1 серпня');
            } else {
                alert((D + 1) + ' липня');
            }
            break;

        case 8 :
            if (D == 31) {
                alert('1 вересня');
            } else {
                alert((D + 1) + ' серпня');
            }
            break;

        case 9 :
            if (D == 30) {
                alert('1 жовтня');
            } else {
                alert((D + 1) + ' вересня');
            }
            break;

        case 10 :
            if (D == 31) {
                alert('1 листопада');
            } else {
                alert((D + 1) + ' жовтня');
            }
            break;

        case 11 :
            if (D == 30) {
                alert('1 грудня');
            } else {
                alert((D + 1) + ' листопала');
            }
            break;

        case 12 :
            if (D == 31) {
                alert('1 січня');
            } else {
                alert((D + 1) + ' грудня');
            }
            break;
            default : alert('Такої дати не існує');
        }
    } else {
        alert('Такої дати не існує')
    }


