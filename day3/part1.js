const fs = require("fs");
const priorities = require("./priorities");
const Rucksack = require("./rucksack");

const input = fs.readFileSync("./input.txt", "utf-8");

let subtotal = 0;

const rucksacks = input.split("\n");

for (let contents of rucksacks) {
  const rucksack = new Rucksack(contents);

  const uniqueItemsInFirstCompartment = new Set(
    rucksack.firstCompartment.split("")
  );

  const itemsInSecondCompartment = rucksack.secondCompartment.split("");

  const duplicates = new Set();

  for (let item of itemsInSecondCompartment) {
    const isItemAlreadyFound = duplicates.has(item);
    if (isItemAlreadyFound) {
      continue;
    }

    const isItemInBothCompartments = uniqueItemsInFirstCompartment.has(item);
    if (isItemInBothCompartments) {
      duplicates.add(item);

      subtotal += priorities[item];
    }
  }
}

console.log(subtotal);
