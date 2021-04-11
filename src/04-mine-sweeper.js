function minesweeper(matrix) {
  const res = [];
  let cell = 0;
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      cell = 0;
      if (j + 1 < matrix[i].length && matrix[i][j + 1] === true) cell++;
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === true) {
        cell++;
      }
      if (i + 1 < matrix.length && matrix[i + 1][j] === true) cell++;
      if (i + 1 < matrix.length && j - 1 > -1 && matrix[i + 1][j - 1] === true) cell++;
      if (j - 1 > -1 && matrix[i][j - 1] === true) cell++;
      if (i - 1 > -1 && j - 1 > -1 && matrix[i - 1][j - 1] === true) cell++;
      if (i - 1 > -1 && matrix[i - 1][j] === true) cell++;
      if (i - 1 > -1 && j + 1 < matrix[i].length && matrix[i - 1][j + 1] === true) cell++;
      res[i].push(cell);
    }
  }
  return res;
}

module.exports = minesweeper;
