const fs = require("fs");
let input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
let [king, rock] = input[0].split(" ").slice(0, 2).map(positionToArr);
let kingMoves = input.slice(1);

const moves = {
  R: [0, 1],
  L: [0, -1],
  B: [1, 0],
  T: [-1, 0],
  RT: [-1, 1],
  LT: [-1, -1],
  RB: [1, 1],
  LB: [1, -1],
};

for (let move of kingMoves) {
  const [dx, dy] = moves[move];
  const kingNext = [king[0] + dx, king[1] + dy];

  if (isOut(kingNext)) {
    continue;
  }

  if (kingNext[0] === rock[0] && kingNext[1] === rock[1]) {
    const rockNext = [rock[0] + dx, rock[1] + dy];

    if (isOut(rockNext)) {
      continue;
    }

    king = kingNext;
    rock = rockNext;
  } else {
    king = kingNext;
  }
}

console.log(arrToPosition(king));
console.log(arrToPosition(rock));

function positionToArr(position) {
  let [char, num] = [...position];

  const charObj = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7 };
  const numObj = { 8: 0, 7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7 };

  return [numObj[num], charObj[char]];
}

function arrToPosition(arr) {
  const charArr = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const numArr = [8, 7, 6, 5, 4, 3, 2, 1];

  return charArr[arr[1]] + numArr[arr[0]];
}

function isOut(arr) {
  return arr[0] < 0 || arr[0] > 7 || arr[1] < 0 || arr[1] > 7;
}
