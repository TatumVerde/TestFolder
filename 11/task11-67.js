let n = parseInt(prompt('введіть число'))
let arrCars = new Array(n)
let arrWeigthCars = new Array(n)
let arrPr = new Array(n)
let str = ''

for (i = 0; i < arrCars.length; i++) {
    arrCars[i] = prompt('введіть марку автомобіля')
    arrWeigthCars[i] = parseInt(prompt('введіть вагу автомобіля'))
    arrPr[i] = prompt('введіть привід')
    if (arrPr[i] == 'передній') {
        arrPr[i] = true
    } else if (arrPr[i] == 'задній') {
        arrPr[i] = false
    }
}

for(i = 0; i < arrCars.length; i++) {
    if (arrWeigthCars[i] >= 700 && arrPr[i] == true) {
        str = str + arrCars[i] + '; '
    } else if (arrWeigthCars[i] >= 850 && arrPr[i] == false) {
        str = str + arrCars[i] + '; '
    }
}

alert(str)