const fs = require("fs");

const outcomes = {
  LOSS: 0,
  DRAW: 3,
  WIN: 6,
};

const getPointsForShape = (choice) => {
  const pointsTable = {
    A: 1,
    X: 1,
    B: 2,
    Y: 2,
    C: 3,
    Z: 3,
  };

  if (!choice in pointsTable) {
    throw new Error("choice not valid");
  }

  return pointsTable[choice];
};

const draws = new Set(["AX", "BY", "CZ"]);

const getShapeToWinAgainstOpponentChoice = (opponentChoice) => {
  return {
    A: "Y",
    B: "Z",
    C: "X",
  }[opponentChoice];
};

const getShapeToLoseAgainstOpponentChoice = (opponentChoice) => {
  return {
    A: "Z",
    B: "X",
    C: "Y",
  }[opponentChoice];
};

const getPointsForRound = (opponentChoice, myChoice) => {
  const isResultADraw = myChoice === "Y";
  if (isResultADraw) {
    return outcomes.DRAW + getPointsForShape(opponentChoice);
  }

  const isResultAWin = myChoice === "Z";
  if (isResultAWin) {
    const shapeINeedToPlayToWin =
      getShapeToWinAgainstOpponentChoice(opponentChoice);

    const pointsForShapeIPlayed = getPointsForShape(shapeINeedToPlayToWin);

    return outcomes.WIN + pointsForShapeIPlayed;
  }

  const isResultALoss = myChoice === "X";
  if (isResultALoss) {
    const shapeINeedToPlayToLose =
      getShapeToLoseAgainstOpponentChoice(opponentChoice);

    const pointsForShapeIPlayed = getPointsForShape(shapeINeedToPlayToLose);

    return outcomes.LOSS + pointsForShapeIPlayed;
  }
};

const input = fs.readFileSync("./input.txt", "utf-8");

let total = 0;

const rounds = input.split("\n");

for (const round of rounds) {
  const [opponentChoice, myChoice] = round.split(" ");

  const pointsForRound = getPointsForRound(opponentChoice, myChoice);

  total += pointsForRound;
}

console.log("total ", total);
