let m1 = []
let m2 = []

for (i = 0; i < 10; i++) {
    m1[i] = []
    for (j = 0; j < 10; j++) {
        m1[i][j] = Math.floor(Math.random() * 2)
    }
}

for (i = 0; i < m1.length; i++) {
    let str = ''
    for (j = 0; j < m1[i].length; j++) {
        str += m1[i][j] + ' '
    }
    console.log(str)
}

console.log(' ')

for (i = 0; i < 10; i++) {
    m2[i] = []
    for (j = 0; j < 10; j++) {
        m2[i][j] = ~m1[i][j]
    }
}

for (i = 0; i < m2.length; i++) {
    let str2 = ''
    for (j = 0; j < m2[i].length; j++) {
        str2 += m2[i][j] + ' '
    }
    console.log(str2)
}
