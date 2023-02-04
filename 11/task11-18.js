let words = prompt('Введіть речення');

let arr = words.split('');

let count1 = 0

let count2 = 0

let letters = 'абвгдеєжзиіїйклмнопрстуфхцчшщїюяАБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'

for(i = 0; i < arr.length; i++) {
    if(letters.includes(arr[i])){
        if(arr[i] == arr[i].toLowerCase()) {
            count1++ 
        } else if(arr[i] == arr[i].toUpperCase()) {
            count2++
        }
    }
    
}

alert('Великих літер: ' + count2 + ' Маленьких літер: ' + count1);