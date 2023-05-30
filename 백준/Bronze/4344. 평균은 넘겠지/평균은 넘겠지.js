let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
let arr = [];
let avg = 0;
let sum = 0;
let count = 0;
let answer = [];
let ratio = 0;
for(let i=1; i<=n; i++, sum=0, count=0){
    arr = input[i].split(' ').map(Number);
    for(let j=1; j<=arr[0]; j++){
        sum += arr[j];
    }
    avg = sum / arr[0];
    
    for(let k=1; k<=arr[0]; k++){
        if(arr[k] > avg){
            count++;
        }
    }
    
    ratio = (count/arr[0] * 100).toFixed(3);
    answer.push(ratio + '%');
}

console.log(answer.join('\n'));