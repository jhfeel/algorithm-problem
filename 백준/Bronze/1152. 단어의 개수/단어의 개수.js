const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim();
let answer = input === ""? 0: input.split(" ").length;
console.log(answer);
