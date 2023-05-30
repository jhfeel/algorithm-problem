let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let arr = [];

for(let i=1; i<=n; i++){
    arr.push('*'.repeat(i));
}

console.log(arr.join('\n'));