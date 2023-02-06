/**
 * @param {number} n
 * @return {number}
 */
// 解题思路，从2开始手写演绎一下发现
// 2最大1*1，3最大2*1，4最大2*2
// 大于4时，按3切分是最大的，5(3*2),6(3*3),7(3*4),8(3*3*2)
// 由此可得，大于4时，有多少个3就相乘，最后剩下的余数，
// 又再次符合4,2,1的情况。
// 最后在乘上余数，可得最终结果。
var cuttingRope = function (n) {
  if (n < 4) return n - 1;
  if (n === 4) return 4;
  let res = 1;
  while (n > 4) {
    res *= 3;
    n -= 3;
  }
  res *= n;
  return res;
};
