let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const words = input.slice(1);
let count = 0;
let before = '';
let done = [];

words.forEach((word) => {
    for (let char of word) {
        if (char !== before) {
            if(done.includes(char)){
                count++;
                break;
            }
        }
        done.push(char);
        before = char;
    }
    
    done = [];
    before = '';
})

console.log(N - count);

