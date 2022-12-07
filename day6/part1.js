const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");

const WINDOW_SIZE = 4;

const getCharactersAtWindow = (array, startIndex) => {
  return array.slice(startIndex, startIndex + WINDOW_SIZE);
};

const isAllCharactersInWindowUnique = (window) =>
  new Set(window).size === WINDOW_SIZE;

const characters = input.split("");

let marker = -1;

for (let i = 0; i < characters.length - WINDOW_SIZE + 1; i++) {
  const window = getCharactersAtWindow(characters, i);

  if (isAllCharactersInWindowUnique(window)) {
    marker = i + WINDOW_SIZE;
    break;
  }
}

console.log(marker);
