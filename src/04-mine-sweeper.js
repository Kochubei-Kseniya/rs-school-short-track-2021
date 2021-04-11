function minesweeper(matrix) {
  const result = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      count = 0;
      if (j + 1 < matrix[i].length && matrix[i][j + 1] === true) count++;
      if (i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === true) {
        count++;
      }      
      if (i + 1 < matrix.length && matrix[i + 1][j] === true) count++;      
      if (i + 1 < matrix.length && j - 1 > -1 && matrix[i + 1][j - 1] === true) count++;      
      if (j - 1 > -1 && matrix[i][j - 1] === true) count++;     
      if (i - 1 > -1 && j - 1 > -1 && matrix[i - 1][j - 1] === true) count++;    
      if (i - 1 > -1 && matrix[i - 1][j] === true) count++;    
      if (i - 1 > -1 && j + 1 < matrix[i].length && matrix[i - 1][j + 1] === true) count++;
      result[i].push(count);
    }
  }
  return result;
}

module.exports = minesweeper;
