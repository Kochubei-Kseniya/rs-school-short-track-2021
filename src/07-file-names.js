function renameFiles(names) {
  const arr = [...names];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr[j] = `${arr[j]}(${count})`;
        count++;
      }
    }
  }

  return arr;
}

module.exports = renameFiles;
