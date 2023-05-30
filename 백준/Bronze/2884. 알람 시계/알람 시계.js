let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let h = Number(input[0]);
let m = Number(input[1]);

if(m < 45){
    // 분이 45 미만일 때
    if(h === 0){
        h = 23;
    } else {
        h -= 1;
    }
    m = (60 + m) - 45;
} else {
    // 분이 45 이상일 때
    m -= 45;
}

console.log(h + ' ' + m);

