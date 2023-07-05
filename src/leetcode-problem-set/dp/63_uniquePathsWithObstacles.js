/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 注意起始格子是石头的情况。
// 先走两边，注意判断石头直接拦截一行的情况。所以 dp[i+1][j] 依赖于 dp[i][j]
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  // 起点和终点都是石头
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      // 第一格只有一种走法。
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        // 在第一行第一列，后方的格子，都依赖前面格子的状态。
        // 如果棋盘是 1，或者前面的 dp 格子是 0，说明过不去了，dp 设为 0.
        dp[0][j] = obstacleGrid[0][j] === 1 || dp[0][j - 1] === 0 ? 0 : 1;
      } else if (j === 0) {
        dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        // 当前格子走法等于 上方的+左侧的。
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
