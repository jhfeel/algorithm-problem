let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').sort((a,b) => a-b);

console.log(arr[0] + ' ' + arr[n-1]);