let matrix = []

for (i = 0; i < 10; i++) {
    matrix[i] = []
    for (j = 0; j < 10; j++) {
        matrix[i][j] = i + '' + j
    }
}

for (i = 0; i < matrix.length; i++) {
    let str = ''
    for (j = 0; j < matrix[i].length; j++) {
        str = str + matrix[i][j] + '  '
    }
    console.log(str)
}