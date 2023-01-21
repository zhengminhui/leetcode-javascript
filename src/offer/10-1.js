/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  let pre = 0;
  let cur = 1;
  let res;

  while (n > 1) {
    res = pre + cur;
    res = res % (1e9 + 7);
    pre = cur;
    cur = res;
    n -= 1;
  }
  return res;
};

const n = 100; // 687995182
// const n = 81; // 107920472;
console.log(fib(n));

// 最后取模会有溢出，所以需要在计算过程中取模
