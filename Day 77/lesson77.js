function printColumnPositions(rows, cols) {
    for (let col = 1; col <= cols; col++) {
        for (let row = 1; row <= rows; row++) {
            console.log(`Row: ${row}, Column: ${col}`);
        }
    }
}

printColumnPositions(2, 2);


const multiplicationTable = createMultiplicationTable();
console.log(multiplicationTable);

function findIncreasingPairs(n) {
    const pairs = [];
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            pairs.push(`(${i}, ${j})`);
        }
    }
    console.log(pairs.join(', '));
}

findIncreasingPairs(3);
