function sumMatrices(matrixA, matrixB) {
    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
        const row = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function transposeMatrix(matrix) {
    const transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const row = [];
        for (let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        transposed.push(row);
    }
    return transposed;
}

function diagonalSum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i]; 
    }

    return [mainDiagonalSum, secondaryDiagonalSum];
}

const matrix1 = [[1, 3], [1, 4]];
const matrix2 = [[4, 1], [2, 2]];
console.log("Sum of matrices:", sumMatrices(matrix1, matrix2));
const matrix = [[1, 2, 3], [4, 5, 6]];
console.log("Transposed matrix:", transposeMatrix(matrix)); 

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Diagonal sums:", diagonalSum(squareMatrix)); 
