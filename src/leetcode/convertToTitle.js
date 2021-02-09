/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} n
 * @return {string}
 * base 10 -> base 26
 * 1: handle corner case 26-Z, so every time n - 1, thus rem 0 -> A, rem 25 -> Z, 
 * otherwise rem 0 -> Z, rem 1 -> A
 * 2: the former char we get is from lower digits, so it should add on the right
 */
var convertToTitle = function(n) {
  var rem = 0,
    res = '';
  while (n > 0) {
    n -= 1;
    rem = n % 26;
    res = String.fromCharCode(rem + 65) + res;
    n = Math.floor(n / 26);
  }
  return res;
};
