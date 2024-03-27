function transposeMatrix(matrix) {
    let transposedMatrix = []

    for(let col = 0; col < matrix[0].length; col++) {
        const newRow = []
        for(let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col])
    }
        transposedMatrix.push(newRow)
    }
    
    return transposedMatrix;
}

let matrix = {
    "matrix": [
        [1, 4],
        [2, 5],
        [3, 6]
    ]
}
console.log(transposeMatrix(matrix))