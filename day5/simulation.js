const getPositionOfItemInGame = (row, col) => {
  return {
    rowPosition: row,
    columnPosition: col * 4 + 1,
  };
};

const getGameSimulation = (rows) => {
  const numberOfTowers = Number(rows.pop().trim().split(" ").pop());

  let simulation = new Array(numberOfTowers).fill([]);

  // go through each column
  for (let col = 0; col < numberOfTowers; col++) {
    const currentColumn = [];

    for (let row = 0; row < rows.length; row++) {
      const { rowPosition, columnPosition } = getPositionOfItemInGame(row, col);

      let char = rows[rowPosition].charAt(columnPosition);

      if (char === " ") {
        continue;
      }

      currentColumn.unshift(char);
    }
    simulation[col] = currentColumn;
  }

  return simulation;
};

module.exports = getGameSimulation;
