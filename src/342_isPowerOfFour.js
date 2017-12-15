/**
 * @param {number} num
 * @return {boolean}
 * 1: 0000 0001
 * 4: 0000 0100
 * 16:0001 0000
 * 64:0100 0000
 * 3 conditions that:
 * 1, num>0;
 * 2, only has one '1', so use n&(n-1) to delete the right most '1' and if then it becomes 0,it prove that there is only one '1';
 * 3, '1' only appear on odd digit. So 0x55555555 is 0000 0000 0101 0101 0101 0101 0101 0101 0101 0101 in hex;
 * method 2
 * for all power of four (x), x - 1 can be devided by 3
 * x^n - 1 = (x - 1)*(x^(n-1)+...+x+1) = x^n + x^(n-1) + ...+ x - x^(n-1) -...- x - 1; so x^n - 1 has a factor x - 1.
 */
var isPowerOfFour = function(num) {
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
  // method 2
  // return num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
};