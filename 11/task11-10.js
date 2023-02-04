let words = prompt('Введіть речення');

let arr = words.split(' ');

let str = ''

for (i = 0; i < arr.length; i++) {
    let arrLetters = arr[i].split('')
    let count = 0
    for (j = 0; j < arrLetters.length; j++) {
        if (arrLetters[j] == 'б' || 
            arrLetters[j] == 'в' ||
            arrLetters[j] == 'г' || 
            arrLetters[j] == 'д' || 
            arrLetters[j] == 'ж' || 
            arrLetters[j] == 'з' || 
            arrLetters[j] == 'й' || 
            arrLetters[j] == 'к' || 
            arrLetters[j] == 'л' || 
            arrLetters[j] == 'м' || 
            arrLetters[j] == 'п' || 
            arrLetters[j] == 'р' || 
            arrLetters[j] == 'с' || 
            arrLetters[j] == 'т' ||  
            arrLetters[j] == 'ф' || 
            arrLetters[j] == 'к' || 
            arrLetters[j] == 'ц' || 
            arrLetters[j] == 'ч' || 
            arrLetters[j] == 'ш' || 
            arrLetters[j] == 'щ' || 
            arrLetters[j] == 'н' ||
            arrLetters[j] == 'х')
            count++
    }
    str = str + count + ' '
}

alert(str)