/**
 * @param {string} s
 * @return {number}
 */
// base case
// dp[0] = 1, s 为空，只有1个解法
// dp[1] = 1, s 单字符，也只有 1 个解法。
// 当前长度的种类等于
// 前面 1 个数 +自己 1 个数，两个一位数
// 和 前面 1 个数+自己 组成一个两位数， 两种情况。
// dp[s] = dp[s[0:-1]] + dp[s[0:-2]]
var numDecodings = function (s) {
  if (s[0] === '0') return 0;

  const len = s.length;
  const dp = new Array(len + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= len; i++) {
    // 检查 前 1，前 2 位字符
    const one = s.charAt(i - 1);
    const two = s.charAt(i - 2);

    // 前 1 位是 1-9 的数
    if (one >= 1 && one <= '9') {
      // s[i] 本身可以作为一个字母
      dp[i] = dp[i] + dp[i - 1];
    }
    // 前 2 位是 10,20，前 1 位小于 6
    if (two === '1' || (two === '2' && one <= '6')) {
      // s[i] 和 s[i - 1] 结合起来表示一个字母
      dp[i] = dp[i] + dp[i - 2];
    }
  }

  return dp[len];
};
