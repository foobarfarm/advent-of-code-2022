const fs = require("fs");

const readFile = (path) => {
  return fs.readFileSync(path, "utf8");
};

const input = readFile("./input.txt");
const calories = input.split("\n");

let caloriesForEachElf = [];
let subtotal = 0;

for (let calorie of calories) {
  if (calorie === "") {
    caloriesForEachElf.push(subtotal);

    subtotal = 0;

    continue;
  }

  subtotal += Number(calorie);
}

const [one, two, three] = caloriesForEachElf.sort((a, b) => b - a);

console.log(one + two + three);
