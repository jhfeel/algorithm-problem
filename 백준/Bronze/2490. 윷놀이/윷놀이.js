let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let resultArr = [];

for (let i=0; i<=2; i++){
    let arr = input[i].split(' ');
    let sum = 0;
    for (let val of arr){
        sum += parseInt(val);
    }
    if(sum === 0) resultArr.push('D');
    if(sum === 1) resultArr.push('C');
    if(sum === 2) resultArr.push('B');
    if(sum === 3) resultArr.push('A');
    if(sum === 4) resultArr.push('E');
}


console.log(resultArr.join('\n'));