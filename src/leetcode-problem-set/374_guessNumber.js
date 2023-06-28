/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return
 * -1 if num is higher than the picked number
 * 1 if num is lower than the picked number
 * otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 二分法，简单。
var guessNumber = function (n) {
  let i = 1;
  let j = n;

  while (true) {
    const mid = i + ((j - i) >> 1);
    const ans = guess(mid);
    if (ans === 0) {
      return mid;
    } else if (ans === -1) {
      j = mid - 1;
    } else if (ans === 1) {
      i = mid + 1;
    }
  }
};

var guess = function (num) {};
