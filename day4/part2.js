const PairTwo = require("./pair-two");
const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");

let total = 0;

for (let pair of input.split("\n")) {
  const pairInstance = new PairTwo(pair);

  total += pairInstance.doesAnyPartOfPairOverlap() ? 1 : 0;
}

console.log(total);
