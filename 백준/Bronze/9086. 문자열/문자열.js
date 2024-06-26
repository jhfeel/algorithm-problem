const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim().split("\n");

const N = Number(input[0]);
const strings = input.slice(1);
const arr = strings.map((val) => val[0] + val[val.length - 1]);

console.log(arr.join("\n"));
