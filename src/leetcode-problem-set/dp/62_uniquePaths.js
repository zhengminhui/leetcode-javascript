/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 两个边的走法都是唯一，所以 dp 数组fill 1，
// 然后从第 1 行 1 列，开始走。
// 右下的走法等于，上+左的走法之和。
var uniquePaths = function (m, n) {
  // 不能 fill 空数组！
  // const dp = new Array(m).fill([]);
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
