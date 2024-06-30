const fileFath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
let input = fs.readFileSync(fileFath).toString().trim();

const arr = [
  input.indexOf("a"),
  input.indexOf("b"),
  input.indexOf("c"),
  input.indexOf("d"),
  input.indexOf("e"),
  input.indexOf("f"),
  input.indexOf("g"),
  input.indexOf("h"),
  input.indexOf("i"),
  input.indexOf("j"),
  input.indexOf("k"),
  input.indexOf("l"),
  input.indexOf("m"),
  input.indexOf("n"),
  input.indexOf("o"),
  input.indexOf("p"),
  input.indexOf("q"),
  input.indexOf("r"),
  input.indexOf("s"),
  input.indexOf("t"),
  input.indexOf("u"),
  input.indexOf("v"),
  input.indexOf("w"),
  input.indexOf("x"),
  input.indexOf("y"),
  input.indexOf("z"),
];

console.log(arr.join(" "));
