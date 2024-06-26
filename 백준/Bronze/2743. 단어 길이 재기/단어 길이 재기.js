const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim();
let count = 0;

for (let i = 0; i < input.length; i++) {
  count++;
}

console.log(count);
