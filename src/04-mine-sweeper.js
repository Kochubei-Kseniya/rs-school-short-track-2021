function minesweeper(matrix) {
  const result = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      count = 0;
      // right
      if (j + 1 < matrix[i].length && matrix[i][j + 1] === true) count++;
      // bottom right
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === true) {
        count++;
      }
      // bottom
      if (i + 1 < matrix.length && matrix[i + 1][j] === true) count++;
      // bottom left
      if (i + 1 < matrix.length && j - 1 > -1 && matrix[i + 1][j - 1] === true) count++;
      // left +
      if (j - 1 > -1 && matrix[i][j - 1] === true) count++;
      // top left
      if (i - 1 > -1 && j - 1 > -1 && matrix[i - 1][j - 1] === true) count++;
      // top
      if (i - 1 > -1 && matrix[i - 1][j] === true) count++;
      // top right
      if (i - 1 > -1 && j + 1 < matrix[i].length && matrix[i - 1][j + 1] === true) count++;
      result[i].push(count);
    }
  }
  return result;
}

module.exports = minesweeper;
