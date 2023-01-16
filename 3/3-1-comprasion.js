// =================== 3 Операторы сравнения и условия ===================
/*
Операторы сравнения:
>, <, >=, <= - больше, меньше, больше или равно, меньше или равно
== - нестрогое сравнение
=== - строгое сравнение
!= - нестрогое неравенство
!== - строгое неравенство
*/

// > (більше)
let isMore = 10 > 5 // true
console.log(isMore)

isMore = 5 > 10 // false
console.log(isMore)

// < (менше)
let isLess = 20 < 15 // false
console.log(isLess)

isLess = 3 < 20 // true
console.log(isLess)

// >= (більше або дорівнює)
let isMoreOrEqual = 10 >= 11 // false
console.log(isMoreEqual)

isMoreOrEqual = 8 >= 8 // true
console.log(isMoreEqual)

// <= (менше або дорівнює)
let isLessOrEqual = 12 <= 13 // true
console.log(isLessOrEqual)

isLessOrEqual = 16 <= 15 // false
console.log(isLessOrEqual)

// == (нестроге порівняння)
let isEqual = 10 == 15 // false
console.log(isEqual)

isEqual = 14 == 14 // true
console.log(isEqual)

isEqual = 18 == '18' // true
console.log(isEqual)

// === (строге порівняняя)
let isEqualStrict = 10 === '10' // false
isEqualStrict = 10 === 10 // true

// != (нестрога нерівність)
let isNotEqual = 8 != 10 // true
isNotEqual = 5 != '5' // false

// !== (строга нерівність)
let isNotEqualStrict = 13 !== 14 // true
isNotEqualStrict = 15 !== '15' // true