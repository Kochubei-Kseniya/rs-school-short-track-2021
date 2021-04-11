deleteDigit(n) {
  let max = 0;
  const arr = String(n).split('');
  const newArr = (i) => Number(arr.slice(0, i).concat(arr.slice(i + 1, arr.length)).join(''));
  for (let i = 0; i < arr.length; i++) {
    if (max < newArr(i)) {
      max = newArr(i);
    }
  }
  return max;
}

module.exports = deleteDigit;

