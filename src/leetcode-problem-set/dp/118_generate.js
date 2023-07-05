/**
 * @param {number} numRows
 * @return {number[][]}
 */
// dp，把三角想象成一个矩阵的左半边。
var generate = function (numRows) {
  const dp = [];
  dp[0] = [1];
  let n = 1;
  while (n < numRows) {
    dp[n] = [];
    for (let i = 0; i <= n; i++) {
      if (i === 0 || i === n) {
        dp[n][i] = 1;
      } else {
        // 等于上一行头顶上的，加上头顶左边的
        dp[n][i] = dp[n - 1][i] + dp[n - 1][i - 1] || 0;
      }
    }
    n++;
  }
  return dp;
};
