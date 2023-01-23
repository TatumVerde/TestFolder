let a = parseInt(prompt('Введіть 1 якщо радіус кола; 2 якщо діаметр; 3 якщо довжина; 4 якщо площа кола'));

let n = parseInt(prompt('Введіть число'));

let r
let d
let l
let s

switch (a) {
    case 1 : 
        r = n;
        d = 2 * r;
        l = 2 * 3.14 * r;
        s = 3.14 * r**2;
        break;
    case 2 : 
        d = n
        r = d/2;
        l = 2 * 3.14 * r;
        s = 3.14 * r**2;
        break;
    case 3 :
        l = n;
        r = l / 2 / 3.14;
        d = 2 * r;
        s = 3.14 * r**2;
        break;
    case 4 : 
        s = n;
        r = Math.sqrt(s / 3.14);
        d = 2 * r;
        l = 2 * 3.14 * r;
        break;
    }       

alert('Радіус = ' + r + '; діаметер = ' + d + '; довжина = ' + l + '; площа = ' + s)