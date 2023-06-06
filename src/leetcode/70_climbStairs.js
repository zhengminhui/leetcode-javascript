/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let pre = 1;
  let lat = 2;
  let res;

  while (n > 2) {
    n -= 1;
    res = pre + lat;
    pre = lat;
    lat = res;
  }

  return res;
};
