const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim().split("\n");

console.log(input.join("\n"));