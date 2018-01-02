/**
 * https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Computation from string usually can be simplified by using a carry
 */
var addBinary = function(a, b) {
  var carry = 0;
  var ans = '';
  var i = a.length - 1;
  var j = b.length - 1;
  while (i >= 0 || j >= 0) {
    if (i >= 0) {
      carry += a[i] - '0';
      i--;
    }
    if (j >= 0) {
      carry += b[j] - '0';
      j--;
    }
    ans = carry % 2 + ans;
    carry = Math.floor(carry / 2);
  }
  if (carry !== 0) {
    ans = carry + ans;
  }
  return ans;
};
