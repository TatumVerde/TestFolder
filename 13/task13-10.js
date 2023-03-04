let m1 = []
let m2 = []
let m3 = []

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
        m2[i][j] = Math.floor(Math.random() * 2)
    }
}

for (i = 0; i < m2.length; i++) {
    let str2 = ''
    for (j = 0; j < m2[i].length; j++) {
        str2 += m2[i][j] + ' '
    }
    console.log(str2)
}

console.log(' ')

for (i = 0; i < m1.length; i++) {
    m3[i] = []
    for (j = 0; j < m1.length; j++) {
        m3[i][j] = m1[i][j] & m2[i][j]
    }
}

for (i = 0; i < m3.length; i++) {
    let str3 = ''
    for (j = 0; j < m3.length; j++) {
        str3 += m3[i][j] + ' '
    }
    console.log(str3)
}