// Типи данних

// Числа number

let x = 10 // змінна типу number

let y = 20 // змінна типу number

let z = 30 // змінна типу number

const g = 100 // змінна константа типу number

// Рядки string
/*
let str = 'Tanya' // змінна типу String

let str2 = 'Vladik'

let str3 = 'Rostik'
*/
// Булевий тип данних boolean

let bool = true // змінна типу boolean

let bool2 = false // змінна типу boolean

// BigInt - цілочисельний тип

// null

/*
let c = null // змінна пуста, змінна типу null

console.log(c)
console.log(d)
*/

// undefined - Якщо змінна обявлена, але їй не присвоєно ніякого значення

// обєкт object - змінна контейнер для багатьох інших змінних

// массив array - змінна контейнер для багатьох інших змінних
// які упорядковані, і як правило одного типу

// операції над змінними

// операції з типом змінної number (число)

// додавання
let resultSuplement = x + y
console.log('resultSuplement = ' + resultSuplement)

// віднімання
let h = y - x
console.log('h = ' + h)

// арифметичні вирази
let u = x + y + x + y - x - y
console.log('u = ' + u)

// У арифметичних виразах можна використовувати душки як і в математиці
let j = x + (y - resultSuplement) + y
console.log('y = ' + y)

// множення
let k = x * y
console.log('k = ' + k)

// ділення
let b = x / y
console.log('b = ' + b)

// арифметичний вираз із всіма операціями
let f = x + y * x - y / (k - x)
console.log('f = ' + f)

// остаток від ділення
let m = x % y
console.log('m = ' + m)

// степінь
let t = x ** 3
console.log('t = ' + t)

// операції над рядками

// конкатенція рядків (додавання)
let str1 = 'hello'
let str2 = 'world'

let str3 = str1 + ' ' + str2
console.log('str3 = ' + str3)

console.log('hello ' + 'Tanya ' + str1 + ' ' + str2)

// операції над типом boolean

let r = true
let e = true

// логічне і &&
let rbool = r && e
console.log('rbool = ' + rbool)

e = false

rbool = r && e
console.log('rbool = ' + rbool)

r = false

rbool = r && e
console.log('rbool = ' + rbool )

/*
true && true = true
true && false = false
false && true = false
false && false = false
*/

// логічне або ||

/*
true || true = true
true || false = true
false || true = true
false || false = false
*/

// логічне не !

// !true = false
// !false = true

// Логічні вирази
rbool = !(r && e) || r || e && !(r || false)
console.log('rbool = ' + rbool)

// prompt() - ввод данних через форму

let dd = prompt('Введіть сторону квадрата')

console.log(dd)

// alert() - вивод даних через форму

alert('сторона квадрата = ' + dd)

// parseInt() - метод перетворює рядок в число

let str = '123'

let num = parseInt(str) // num = 123