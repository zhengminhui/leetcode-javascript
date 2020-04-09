/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 构建一个 m*n 的二位数组，这个数组的每个位置，记录从出发点到改点的路径走法数目
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(1);

    for (let j = 0; j < n; j++) {
      if (i > 0 && j > 0) {
        // 每一个小正方形的右下角的走法，等于他上方过来加上左边过来的走法之和
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};

// uniquePaths(3, 2);
uniquePaths(7, 3);
