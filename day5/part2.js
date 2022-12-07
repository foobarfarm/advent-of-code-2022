const fs = require("fs");
const getGameSimulation = require("./simulation");

const parseInstruction = (instruction) => {
  const parsedInstruction = instruction
    .replace("move", "")
    .replace("from", "")
    .replace("to", "")
    .trim()
    .split(" ")
    .filter((str) => str !== "")
    .map((stringifiedNumber) => Number(stringifiedNumber));

  const [numberOfCratesToMove, towerToMoveFrom, towerToMoveTo] =
    parsedInstruction;

  return { numberOfCratesToMove, towerToMoveFrom, towerToMoveTo };
};

const applyTransformationToSimulation = (
  simulation,
  { numberOfCratesToMove, towerToMoveFrom, towerToMoveTo }
) => {
  const stack = [];

  for (let i = 0; i < numberOfCratesToMove; i++) {
    const isTowerEmpty = simulation[towerToMoveFrom - 1].length < 1;
    if (isTowerEmpty) {
      return;
    }

    const selectedCrate = simulation[towerToMoveFrom - 1].pop();
    stack.push(selectedCrate);
  }

  while (stack.length > 0) {
    simulation[towerToMoveTo - 1].push(stack.pop());
  }
};

const getTopElementsFromEachTower = (simulation) => {
  return simulation.reduce(
    (stringRepresentationOfTopElements, currentTower) => {
      return stringRepresentationOfTopElements.concat(currentTower.pop());
    },
    ""
  );
};

const input = fs.readFileSync("./input.txt", "utf-8");

const [towers, instructionsParagraph] = input.split("\n\n");

const rows = towers.split("\n");

const simulation = getGameSimulation(rows);

const instructions = instructionsParagraph.split("\n");
for (let instruction of instructions) {
  const parsedInstruction = parseInstruction(instruction);

  applyTransformationToSimulation(simulation, parsedInstruction);
}

console.log(getTopElementsFromEachTower(simulation));
