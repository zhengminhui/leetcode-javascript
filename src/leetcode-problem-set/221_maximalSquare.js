/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 一开始想错了方向，想找左上角为 1，右下角也为1，然后去递归找两条边是否是 1，想复杂了
// base case
// dp[i][j] = 0， 那么当前格子就是 0
// dp[i][j] = 1, 这个时候才有更新的前提，
// 右下角的值，取决于 上，左，和左上的值。
// 找到状态转移方程，就很简单。
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = [];
  let maxLen = 0;

  // create a dp matrix
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = parseInt(matrix[i][j], 10);
      maxLen = dp[i][j] > maxLen ? dp[i][j] : maxLen;
    }
  }

  // dp[i][j] = n 表示当前格子边长为 n 的正方形
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i][j]) {
        dp[i][j] =
          Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) +
          parseInt(matrix[i][j], 10);
        maxLen = dp[i][j] > maxLen ? dp[i][j] : maxLen;
      }
    }
  }
  return maxLen * maxLen;
};
