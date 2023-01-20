let A = parseInt(prompt('Введіть число А'));

let B = parseInt(prompt('Введіть число В (але В не = 0 )'));

let N = parseInt(prompt('Введіть 1 якщо + ; 2 якщо - ; 3 якщо * ; 4 якщо / '));

let result;

switch (N) {
    case 1 : result = A + B;
        break;
    case 2 : result = A - B;
        break;
    case 3 : result = A * B;
        break;
    case 4 : result = A / B;
        break;
        default : result('Такої команди не існує')

}

alert(result)