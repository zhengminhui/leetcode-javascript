/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 杨辉三角，简单 dp
var generate = function (numRows) {
  const dp = [];
  for (let i = 0; i < numRows; i++) {
    dp[i] = [];
    for (let j = 0; j <= i; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (j === 0 || j === i) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp;
};
