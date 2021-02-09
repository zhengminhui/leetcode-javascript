/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const r = matrix.length;
  if (r === 0) return 0;
  const c = matrix[0].length;
  const dp = matrix.slice();

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (i === 0 && j !== 0) {
        // 加和第一行
        dp[i][j] = dp[i][j - 1] + matrix[i][j];
      } else if (i !== 0 && j === 0) {
        // 加和第一列
        dp[i][j] = dp[i - 1][j] + matrix[i][j];
      } else if (i > 0 && j > 0) {
        // 加和其他所有
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i][j];
      }
    }
  }
  this.dp = dp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  const { dp } = this;
  const total = dp[row2][col2];
  const left = col1 - 1 >= 0 ? dp[row2][col1 - 1] : 0;
  const top = row1 - 1 >= 0 ? dp[row1 - 1][col2] : 0;
  const overlap = row1 - 1 >= 0 && col1 - 1 >= 0 ? dp[row1 - 1][col1 - 1] : 0;

  return total - left - top + overlap;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
