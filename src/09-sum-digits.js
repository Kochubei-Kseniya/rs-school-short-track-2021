function getSumOfDigits(n) {
  const newArr = n.toString().split('');
  const digitArr = [];
  newArr.forEach((el) => digitArr.push(Number(el)));

  function getArrSum(arr) {
    let digitSum = 0;
    for (let i = 0; i < arr.length; i++) {
      digitSum += arr[i];
    }
    return digitSum;
  }
  let sum = getArrSum(digitArr);
  if (sum > 9) {
    sum = getSumOfDigits(sum);
  }
  return sum;
}
