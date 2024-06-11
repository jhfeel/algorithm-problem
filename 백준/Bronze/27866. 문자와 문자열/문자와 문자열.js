const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
	input.push(line);
    if(input.length === 2){
        rl.close();
    }
}).on("close", function() {
    solution(input);
	process.exit();
});

function solution (input) {
    let [arr, i] = input
    
    console.log(arr[Number(i) - 1]);
}