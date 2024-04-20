let matrix1 = [
    [5, 2, 3,8],
    [7, 2, 3,8],
    [1, 0, 5,8],
    [1, 0, 5,8],
];
let matrix2 = [
    [5, 2, 3,0],
    [5, 2, 3,0],
    [7, 2, 3,0],
    [1, 9, 5,0],
];
let result = []
for (let i = 0; i < 4; i++) {
    result[i] = []
    for (let j = 0; j < 4; j++) {
        let sum = matrix1[i][j] + matrix2[i][j];
        result[i].push(sum);
    }
}

console.log(result);