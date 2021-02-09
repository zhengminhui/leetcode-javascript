/**
 * @param {number} x
 * @return {boolean}
 * corner case: x < 0 return fasle; if x > 2^31 -1 , overflow, return false;
 * generate a new number, and check if it equals to original x
 */
var isPalindrome = function(x) {
  var copy = x;
  var newX = 0;
  var tail = 0;
  if (x < 0) {
    return false;
  }
  while (copy !== 0) {
    tail = copy % 10;
    newX = newX * 10 + tail;
    copy = Math.floor(copy / 10);
  }
  // check if overflow
  if (newX > Math.pow(2, 31) - 1) {
    return false;
  }
  return newX === x;
};
