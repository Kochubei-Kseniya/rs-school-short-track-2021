function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let i;
  while (start <= end) {
    i = Math.floor((start + end) / 2);

    if (array[i] < value) start = i + 1;
    else if (array[i] > value) end = i - 1;
    else return i;
  }

  return null;
}

module.exports = findIndex;
