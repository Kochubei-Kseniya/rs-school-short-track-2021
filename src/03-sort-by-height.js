function sortByHeight(arr) {
  const res = [];

  const sorted = [...arr].sort((a, b) => a - b).filter((val) => val !== -1);

  arr.map((value) => (value === -1 ? res.push(-1) : res.push(sorted.shift())));

  return res;
}

module.exports = sortByHeight;
