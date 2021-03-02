/**
 * @param {number} n
 * @return {number}
 * 如何按顺序 merge 三个数组
 */
var nthUglyNumber = function (n) {
  const dp = [1];
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 1; i < n; i++) {
    const n2 = dp[a] * 2;
    const n3 = dp[b] * 3;
    const n5 = dp[c] * 5;
    dp[i] = Math.min(n2, n3, n5);
    if (dp[i] === n2) a++;
    if (dp[i] === n3) b++;
    if (dp[i] === n5) c++;
  }
  return dp[n - 1];
};

const n = 10;
console.log(nthUglyNumber(n));
