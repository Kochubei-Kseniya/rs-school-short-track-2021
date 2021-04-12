/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
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
