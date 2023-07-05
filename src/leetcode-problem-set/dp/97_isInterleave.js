/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// 注意 dp 数组的长度，应该是 m+1，n+1. 坑了很久。
// 0，0 位置表示，不用任何字符就完成拼接了。
var isInterleave = function (s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  if (s3.length !== m + n) return false;

  const dp = [];
  for (let i = 0; i <= m + 1; i++) {
    dp[i] = [];
    for (let j = 0; j <= n + 1; j++) {
      dp[i][j] = false;
    }
  }
  dp[0][0] = true;

  // 画一个二维矩阵图，s1，s2 横纵排列对应。
  // i, j 表示当前长度时，能否拼接成。类似63 不同路径2，有障碍物的那题。先走完两个边。
  // 如果左（上）是 true，并且当前字符匹配，当前也是 true。否则是 false。
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // 两条边确定后，变成常规的 dp 题，右下的状态，取决于左边或右边的状态
  // 如果 s3===s1, 检查上方；如果 s3===s2, 检查左侧
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s3[i + j - 1] === s1[i - 1]) ||
        (dp[i][j - 1] && s3[i + j - 1] === s2[j - 1]);
    }
  }
  return dp[m][n];
};
