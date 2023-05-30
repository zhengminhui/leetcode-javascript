/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 需要画一个二维矩阵图辅助理解。
// dp 的本质是穷举所有情况，所以肯定是 O(n^2),两层 for 循环
// base case: 如果 text1 char(a) 等于 text2 char(b), 则dp[i][j] 等于↖左上方值加1
// 否则不等， 等于←左或者↑上方值的最大值，也就是不新增加
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = [];
  // 构建二维数组
  for (let i = 0; i <= len1; i++) {
    const arr = [];
    for (let j = 0; j <= len2; j++) {
      arr.push(0);
    }
    dp.push(arr);
  }
  // 注意 i, j 从 1 开始遍历，方便直观理解长度，但是去 char 时是从 0 开始，所以是 charAt(i-1)
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[len1][len2];
};
