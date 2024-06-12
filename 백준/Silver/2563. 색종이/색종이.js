const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n')
const N = Number(input[0]);
const papers = input.slice(1).map((v) => v.split(' ').map(Number));
const matrix = Array.from({ length: 100 }, () => Array(100).fill(0));
let sum = 0;

papers.forEach((paper) => {
    const [x, y] = paper;
    
    for(let i = x; i < x + 10; i++){
        for (let j = y; j < y + 10; j++) {
            matrix[i][j] = 1;
        }
    }
});

for(let i = 0; i < 100; i++){
    for (let j = 0; j < 100; j++) {
        if(matrix[i][j] === 1) {
            sum += 1;
        }
    }
}

console.log(sum);