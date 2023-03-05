/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) return N;

  let pre = 0;
  let lat = 1;
  let res = 0;

  while (N > 1) {
    res = pre + lat;
    pre = lat;
    lat = res;
    N -= 1;
  }

  return res;
};
