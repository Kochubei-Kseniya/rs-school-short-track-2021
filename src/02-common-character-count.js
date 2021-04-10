function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let s3 = s2;
  for (let i = 0; i < s1.length; i++) {
    if (s3.indexOf(s1[i]) > -1) {
      count++;
      s3 = s3.replace(s1[i], '');
    }
  }
  return count;
}
module.exports = getCommonCharacterCount;
