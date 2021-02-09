/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n;
    let pre = 0;
    let lat = 1;
    let res;
    for (let i = 1; i < n; i++) {
      res = pre + lat;
      res %= 1e9 + 7;
      pre = lat;
      lat = res;
    }
    return res;
  };
  
  const n = 100; // 687995182
  // const n = 81; // 107920472;
  console.log(fib(n));
  
  // 最后取模会有溢出，所以需要在计算过程中取模
  