/**
 * @param {number} n
 * @return {boolean}
 * (n & (n - 1)) === 0 means only one '1' in binary
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0;
};
