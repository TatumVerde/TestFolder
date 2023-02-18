let n = parseInt(prompt("кількість столиків"))

let arrResult = new Array(n)
let arrDiscount = new Array(n)

for (i = 0; i < n; i++) {
    let str = prompt("введіть сумму кожного відвідувача за одним столиком")
    let arrMoney = str.split(' ')
    
    arrResult[i] = 0

    for (j = 0; j < arrMoney.length; j++) {
        arrResult[i] = arrResult[i] + parseInt(arrMoney[j])
    }

    if (arrResult[i] >= 1000 && arrMoney.length > 3) {
        arrResult[i] = arrResult[i] - (arrResult[i] * (10/100))
        arrDiscount[i] = 10
    } else if (arrResult[i] >= 1000 && arrMoney.length <= 3) {
        arrResult[i] = arrResult[i] - (arrResult[i] * (15/100))
        arrDiscount[i] = 15
    } else {
        arrDiscount[i] = 0
    }
}

let string = ''

for (i = 0; i < arrResult.length; i++) {
    string = string + arrResult[i] + ' (знижка: ' + arrDiscount[i] + '); '
}

alert(string)