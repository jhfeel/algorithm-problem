let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];
let answer = [];

for(let i=1; i<=n; i++){
    arr = input[i].split(' ');
    answer.push(Number(arr[0]) + Number(arr[1]));
}

console.log(answer.join('\n'));