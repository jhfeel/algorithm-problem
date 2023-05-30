let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

input = input.map(Number);
const max = input.reduce((acc, cur) => Math.max(acc, cur));
const a = input[0];
const b = input[1];
const c = input[2];

if(a === b && b === c){
    console.log(10000 + a * 1000);
} else if (a === b) {
    console.log(1000 + a * 100);
} else if (b === c) {
    console.log(1000 + b * 100);
} else if (c === a) {
    console.log(1000 + c * 100);
} else {
    console.log(100 * max);
}
