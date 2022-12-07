const priorities = require("./priorities");
const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");

const rucksacks = input.split("\n");

const initialiseGroups = (rucksacks) => {
  const groups = [];
  while (rucksacks.length > 0) {
    const groupMembers = [
      rucksacks.shift(),
      rucksacks.shift(),
      rucksacks.shift(),
    ];

    groups.push(groupMembers);
  }

  return groups;
};

const getBadgeForGroup = ([bagOne, bagTwo, bagThree]) => {
  const uniqueItemsInBagTwo = new Set([...bagTwo]);
  const uniqueItemsInBagThree = new Set([...bagThree]);

  for (let item of bagOne) {
    const isItemInAllBags =
      uniqueItemsInBagTwo.has(item) && uniqueItemsInBagThree.has(item);
    if (isItemInAllBags) {
      return item;
    }
  }
};

const groups = initialiseGroups(rucksacks);

let total = 0;

for (let group of groups) {
  const badge = getBadgeForGroup(group);

  const priority = priorities[badge];

  total += priority;
}

console.log(total);
