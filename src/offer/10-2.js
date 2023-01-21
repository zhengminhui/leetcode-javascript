/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) return 1;

  if (n > 0 && n <= 2) return n;

  let pre = 1;
  let cur = 2;
  let res;

  while (n > 2) {
    res = pre + cur;
    res %= 1e9 + 7;
    pre = cur;
    cur = res;
    n -= 1;
  }

  return res;
};
