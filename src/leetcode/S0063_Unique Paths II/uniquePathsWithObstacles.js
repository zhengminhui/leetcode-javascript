/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[row - 1][col - 1] === 1) return 0;

  // 初始化 dp 数组，给一个初始值 1，一步不走的情况在上面已经 return。
  const dp = new Array(col).fill(0);
  dp[0] = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else if (j > 0) {
        // 当 j 等于 0 的时候，计算沿用的一直是最开始初始赋的 1，除非在之前被置为 0
        // dp[j] = dp[j] + dp[j - 1] 右侧的 dp[j] 其实是上一行同样位置的值
        dp[j] = dp[j] + dp[j - 1];
      }
    }
  }
  return dp[col - 1];
};

uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
uniquePathsWithObstacles([[0, 1]]);
uniquePathsWithObstacles([[0, 0], [1, 0]]);
uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]);
