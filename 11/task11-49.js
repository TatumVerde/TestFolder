let str1
let str2

let arr1
let arr2

let a 
let b

let arrLett = ['а','б','в','г','д','е','є','ж','з','и','і','ї','й','к','л','м','н',
    'о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ю','я']


while (true) {
    str1 = prompt('Введіть слово')
    str2 = prompt('Введіть друге слово')

    arr1 = str1.split('')
    arr2 = str2.split('')

    if (arr1.length == arr2.length) {
        break
    }

    alert('Помилка: рядки не рівні')
}

let i = 0

while (i < arr1.length) {
    a = arrLett.indexOf(arr1[i])
    b = arrLett.indexOf(arr2[i])
    if (a < b) {
        alert(str1 + '; ' + str2)
        break
    } else if (b < a) {
        alert(str2 + '; ' + str1)
        break
    }
    i++
}

if (i == arr1.length) {
    alert('Слова ідентичні')
}