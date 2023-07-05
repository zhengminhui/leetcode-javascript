/**
 * @param {number} n
 * @return {number}
 */
// 简单题，比 fib 多一个数
var tribonacci = function (n) {
  if (n <= 1) return n;
  if (n === 2) return 1;

  let res = 0;
  let pre0 = 0;
  let pre1 = 1;
  let pre2 = 1;
  while (n > 2) {
    res = pre0 + pre1 + pre2;
    pre0 = pre1;
    pre1 = pre2;
    pre2 = res;
    n -= 1;
  }
  return res;
};

console.log(tribonacci(3));
