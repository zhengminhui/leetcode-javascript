/**
 * @param {number} n
 * @return {boolean}
 * You cannot win if the number of remaining stones is times of 4.
 */
var canWinNim = function(n) {
  return n % 4 !== 0;
};
