/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const row = grid.length;
  const col = grid[0].length;

  let dp = grid.slice();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (i === 0) {
        dp[i][j] += grid[i][j - 1];
      } else if (j === 0) {
        dp[i][j] += grid[i - 1][j];
      } else {
        dp[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return dp[row - 1][col - 1];
};
