let word = prompt('Enter word')

let arr = word.split('')

let letters = 'qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNM'

let str = ''

for (i = 0; i < arr.length; i++) {
    if (letters.includes(arr[i])) {
        str = str + '.' + arr[i].toLowerCase() 
    }

}

alert(str)