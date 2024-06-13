const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let vote = input.slice(1).map(Number);
let dasom = vote[0];
const others = vote.slice(1);
let count = 0;

while (dasom <= Math.max(...others)) {
  const maxIdx = others.indexOf(Math.max(...others));
  others[maxIdx]--;
  dasom++;
  count++;
}

console.log(count);
