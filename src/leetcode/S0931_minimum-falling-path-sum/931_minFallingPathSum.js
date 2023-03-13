/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  // 注意生成 2 维数组，不要用 fill！
  // fill 一个 object，会指向同一地址。
  // 老实遍历
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cur = matrix[i][j];
      if (i === 0 && j === 0) {
        // eslint-disable-next-line prefer-destructuring
        dp[0][0] += cur;
      } else if (i === 0) {
        dp[i][j] += cur;
      } else if (j === 0) {
        dp[i][0] += cur + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
      } else if (j === n - 1) {
        dp[i][j] += cur + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] +=
          cur + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
      }
    }
  }

  return Math.min(...dp[n - 1]);
};

const matrix = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];
console.log(minFallingPathSum(matrix));
