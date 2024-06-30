const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim().split(" ");

input = input.map((val) => [...val].reverse().join("")).map(Number);

console.log(Math.max(...input));
