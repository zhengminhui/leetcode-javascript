/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 杨辉三角变种。算是简单题了
// 注意 j 的判断，需要对 第一个数，和最后一个数特殊处理一下。
// 其他的按状态转移方程来就行。
// 最后返回最后一行的最小值。
var minimumTotal = function (triangle) {
  const level = triangle.length;
  if (!level) return 0;
  const top = triangle[0][0];
  if (level === 1) return top;

  const dp = [[top]];

  for (let i = 1; i < level; i++) {
    const row = triangle[i];
    dp[i] = [];
    for (let j = 0; j < row.length; j++) {
      const cur = triangle[i][j];
      if (j === 0) {
        dp[i][j] = cur + dp[i - 1][j];
      } else if (j === row.length - 1) {
        dp[i][j] = cur + dp[i - 1][j - 1];
      } else {
        dp[i][j] = cur + Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
      }
    }
  }
  return Math.min(...dp[level - 1]);
};
