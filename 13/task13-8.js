let matrix = []
let matrix2 = []

for (i = 0; i < 10; i++) {
    matrix[i] = []
    for (j = 0; j < 10; j++) {
        matrix[i][j] = 0 
        if (i == j) {
            matrix[i][j] = 1
        }
    }
}

for (i = 0; i < matrix.length; i++) {
    let str = ''
    for (j = 0; j < matrix[i].length; j++) {
        str = str + matrix[i][j] + '  '
    }
    console.log(str)
}

console.log(' ')

for (i = 0; i < 10; i++) {
    matrix2[i] = []
    for (j = 0; j < 10; j++) {
        matrix2[i][j] = 0 
        if ((i + j) == 9) {
            matrix2[i][j] = 1
        }
    }
}

for (i = 0; i < matrix2.length; i++) {
    let str2 = ''
    for (j = 0; j < matrix2[i].length; j++) {
        str2 = str2 + matrix2[i][j] + '  '
    }
    console.log(str2)
}