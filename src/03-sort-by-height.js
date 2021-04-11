function sortByHeight(arr) {
  const filtered = arr.filter((i) => i > 0).sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(filtered[0]);
      filtered.shift();
    }
  }
  return result;
}
module.exports = sortByHeight;
