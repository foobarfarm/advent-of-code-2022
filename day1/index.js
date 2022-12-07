const fs = require("fs");

const readFile = (path) => {
  return fs.readFileSync(path, "utf8");
};

const input = readFile("./input.txt");
const calories = input.split("\n");

let max = Number.NEGATIVE_INFINITY;
let subtotal = 0;

for (let calorie of calories) {
  if (calorie === "") {
    max = Math.max(max, subtotal);

    subtotal = 0;

    continue;
  }

  subtotal += Number(calorie);
}

console.log(max);
