/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const mod = 1e9 + 7;
  const dp = new Array(n).fill(1);
  // 画图可穷举前 4 种 base case
  // 最少 1 种
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;
  // 注意两个 L 对着拼接加一个条装横着放的两种情况
  dp[4] = 11;
  //  推导公式 dp[5] = dp[i-1] 左右各加 1 个， 加上 dp[i-2] 左右各加 d[2].
  for (let i = 5; i <= n; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % mod;
  }
  return dp[n];
};
