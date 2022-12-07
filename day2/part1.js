const fs = require("fs");

const choices = {
  ROCK: {
    opponentCode: "A",
    myCode: "X",
  },
  PAPER: {
    opponentCode: "B",
    myCode: "Y",
  },
  SCISSORS: {
    opponentCode: "C",
    myCode: "Z",
  },
};

const outcomes = {
  LOSS: 0,
  DRAW: 3,
  WIN: 6,
};

const draws = new Set([
  `${choices.ROCK.opponentCode}${choices.ROCK.myCode}`,
  `${choices.PAPER.opponentCode}${choices.PAPER.myCode}`,
  `${choices.SCISSORS.opponentCode}${choices.SCISSORS.myCode}`,
]);

const casesWhereIWin = new Set([
  `${choices.ROCK.opponentCode}${choices.PAPER.myCode}`,
  `${choices.PAPER.opponentCode}${choices.SCISSORS.myCode}`,
  `${choices.SCISSORS.opponentCode}${choices.ROCK.myCode}`,
]);

const isRoundADraw = (opponentChoice, myChoice) => {
  return draws.has(`${opponentChoice}${myChoice}`);
};

const didIWin = (opponentChoice, myChoice) => {
  return casesWhereIWin.has(`${opponentChoice}${myChoice}`);
};

const getScoreForShape = (myChoice) => {
  return {
    [choices.ROCK.myCode]: 1,
    [choices.PAPER.myCode]: 2,
    [choices.SCISSORS.myCode]: 3,
  }[myChoice];
};

const getPointsForRound = (opponentChoice, myChoice) => {
  return (
    getPointsForOutcome(opponentChoice, myChoice) + getScoreForShape(myChoice)
  );
};

const getPointsForOutcome = (opponentChoice, myChoice) => {
  if (isRoundADraw(opponentChoice, myChoice)) {
    return outcomes.DRAW;
  }

  if (didIWin(opponentChoice, myChoice)) {
    return outcomes.WIN;
  }

  return outcomes.LOSS;
};

const input = fs.readFileSync("./input.txt", "utf8");

let total = 0;

const rounds = input.split("\n");

for (const round of rounds) {
  const [opponentChoice, myChoice] = round.split(" ");

  const pointsForRound = getPointsForRound(opponentChoice, myChoice);

  console.log(pointsForRound);

  total += pointsForRound;
}

console.log("total ", total);
