const Pair = require("./pair");
const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
// 6-6,4-6 - true
// 2-8,3-7 - true

let total = 0;

for (let pair of input.split("\n")) {
  const pairInstance = new Pair(pair);

  total += pairInstance.doesOnePairWrapOther() ? 1 : 0;
}

console.log(total);
