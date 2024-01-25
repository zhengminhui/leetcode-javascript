/**
 * @param {number} num
 * @return {boolean}
 */
// 找平方数，考虑二分法
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 0;
  let right = num;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const n = mid * mid;
    if (n === num) {
      return true;
    } else if (n < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};

console.log(isPerfectSquare(9));
