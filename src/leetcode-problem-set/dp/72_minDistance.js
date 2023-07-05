/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 0630： base case ，如果字符相等，需要的步骤等于左上角的步骤。如果不等，取决于上，左，左上的最小值 + 1.
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  // 生成 2 维 dp数组，
  // base case dp[0][0]， 两个都是空字符串，只需 0 步。
  const dp = new Array(len1 + 1);
  for (let i = 0; i <= len1; i++) {
    dp[i] = new Array(len2 + 1).fill(0);
  }
  // base case， word1，2 分别转换为空字符串的步数（要画图理解）
  // note5016:最坏的情况，把一个字符串每个字母都改变，需要的步骤数是 len,'abc'->'ddd'
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      // char equal
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[len1][len2];
};

// 伪代码
function dp(word1, i, word2, j) {
  // if two chars are same, just skip
  // move pointers on step left
  if (word1[i] === word2[j]) {
    return dp(word1, i - 1, word2, j - 1);
  } else {
    // word1 插入一个字符，i 不变，word2 向左移一位。
    const insert = dp(word1, i, word2, j - 1) + 1;
    // 删除一个字符，左移一位，word2 j 不变。
    const del = dp(word1, i - 1, word2, j) + 1;
    // 替换字符，使word1,2 相等，i，j 同时左移一位。
    const replace = dp(word1, i - 1, word2, j - 1) + 1;
    return Math.min(insert, del, replace);
  }
}
