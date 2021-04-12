function getSumOfDigits(n) {
  const newArr = n.toString().split('');
  const digitArr = [];
  newArr.forEach((el) => digitArr.push(Number(el)));

  function getSum(arr) {
    let digitSum = 0;
    for (let i = 0; i < arr.length; i++) {
      digitSum += arr[i];
    }
    return digitSum;
  }
  let sum = getSum(digitArr);
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
