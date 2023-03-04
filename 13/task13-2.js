let matrix = []

for (i = 0; i < 10; i++) {
    matrix[i] = []
    for (j = 0; j < 10; j++) {
        matrix[i][j] = Math.floor(Math.random() * 101)
    }
}

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        console.log('[' + i + '][' + j + '] - ' + matrix[i][j])
    }
}