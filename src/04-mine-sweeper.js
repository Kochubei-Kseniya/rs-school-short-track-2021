function minesweeper(matrix) {
  const result = [];
  let cell = 0;
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      cell = 0;
      // right
      if (j + 1 < matrix[i].length && matrix[i][j + 1] === true) cell++;
      // bottom right
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === true) {
        cell++;
      }
      // bottom
      if (i + 1 < matrix.length && matrix[i + 1][j] === true) cell++;
      // bottom left
      if (i + 1 < matrix.length && j - 1 > -1 && matrix[i + 1][j - 1] === true) cell++;
      // left +
      if (j - 1 > -1 && matrix[i][j - 1] === true) cell++;
      // top left
      if (i - 1 > -1 && j - 1 > -1 && matrix[i - 1][j - 1] === true) cell++;
      // top
      if (i - 1 > -1 && matrix[i - 1][j] === true) cell++;
      // top right
      if (i - 1 > -1 && j + 1 < matrix[i].length && matrix[i - 1][j + 1] === true) cell++;
      result[i].push(cell);
    }
  }
  return result;
}

module.exports = minesweeper;
