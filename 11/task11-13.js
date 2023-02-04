let n = 0;

let x = 0;

let result = 0;

let record = 0;

let a = 0;

let b = 0;

if (localStorage.getItem('record') != undefined) {
    record = localStorage.getItem('record');
} 

do {
    a = (Math.floor(Math.random() * 11));

    b = (Math.floor(Math.random() * 11));

    x = parseInt(prompt(a + ' * ' + b + ' ='))
    
    result = a * b

    n++

} while (x == result)

n--;

if (n > record) {
    localStorage.setItem('record', n)
    record = n
} 

alert(a + ' * ' + b + ' = ' + result + '; Ваш рахунок = ' + n + '; Рекорд = ' + record) 