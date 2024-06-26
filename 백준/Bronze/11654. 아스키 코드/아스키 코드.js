const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim();

const ascii = input.charCodeAt(0);

console.log(ascii);
