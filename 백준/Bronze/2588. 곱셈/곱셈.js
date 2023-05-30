let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = Number(input[0]);
let b = input[1];
const b1 = Number(b[0]);
const b2 = Number(b[1]);
const b3 = Number(b[2]);
b = Number(b);

let answer = '';
answer += a * b3; 
answer += '\n';
answer += a * b2;
answer += '\n';
answer += a * b1;
answer += '\n';
answer += a * b;

console.log(answer);


