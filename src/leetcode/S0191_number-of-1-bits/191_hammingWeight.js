/**
 * @param {number} n - a positive integer
 * @return {number}
 * >> is the arithmetic (or signed) right shift operator.
 * >>> is the logical (or unsigned) right shift operator.
 * << is the left shift operator, and meets the needs of both logical and arithmetic shifts.
 */
var hammingWeight = function (n) {
  var ans = 0;
  // while(n !== 0) {
  //   if (n & 1 === 1) {
  //     ans++;
  //   }
  //   n = n >>> 1;
  // }
  // method 2: remove right most 1
  while (n !== 0) {
    n = n & (n - 1);
    ans++;
  }
  return ans;
};
