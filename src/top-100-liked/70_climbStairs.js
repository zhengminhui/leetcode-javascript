/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;

  let pre = 1;
  let lat = 2;
  let res = 0;

  while (n > 2) {
    res = pre + lat;
    pre = lat;
    lat = res;
    n--;
  }
  return res;
};
