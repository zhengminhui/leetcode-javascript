/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var sign = x > 0 ? 1 : -1;
  // to string and reverse
  var reverseStr = x
    .toString()
    .split('')
    .reverse()
    .join('');
  var reverseNumber = parseInt(reverseStr, 10);
  // handle the overflow case however in JavaScript the Number.MAX_VALUE is way larger than this;
  // 32 bit Max Int 2^31-1, 32 bit Min Int -2^31+1,
  if (reverseNumber > Math.pow(2, 31) - 1 || reverseNumber < -Math.pow(2, 31) + 1) {
    return 0;
  }
  return sign * reverseNumber;
};
