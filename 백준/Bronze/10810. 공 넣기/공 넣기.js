const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, m] = input[0].split(" ").map(Number);

const games = input.slice(1);
const bucket = Array(n).fill(0);

// 1. 공 넣기 반복
games.forEach((game) => {
  const [i, j, k] = game.split(" ").map(Number);

  for (let a = i - 1; a <= j - 1; a++) {
    bucket[a] = k;
  }
});

// 2. 마지막 배열을 join해 출력
console.log(bucket.join(" "));
