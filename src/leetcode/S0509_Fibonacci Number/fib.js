/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N <= 1) return N;
  let pre = 0;
  let lat = 1;
  let fibo = 0;

  while (N >= 2) {
    fibo = pre + lat;
    pre = lat;
    lat = fibo;
    N -= 1;
  }

  return fibo;
};
