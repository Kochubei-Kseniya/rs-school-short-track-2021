function deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('');
  const length = arr.length;
  const newArr = (i) => Number(arr.slice(0, i).concat(arr.slice(i + 1, length)).join(''));
  for (let i = 0; i < length; i++) {
    if (max < newArr(i)) {
      max = newArr(i);
    }
  }
  return max;
}

module.exports = deleteDigit;
