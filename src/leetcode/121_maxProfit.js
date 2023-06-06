/**
 * @param {number[]} prices
 * @return {number}
 */
// 1 我今天没有持有股票
// dp[i][k][0] = max(今天选择休息，    今天选择卖掉)
// dp[i][k][0] = max(dp[i-1][k][0]，dp[i-1][k][1]+price[i])
// 2 今天持有了股票
// dp[i][k][1] = max(今天选择休息，    今天选择买股票)
// dp[i][k][1] = max(dp[i-1][k][1]，dp[i-1][k-1][0]-price[i])
// base case
// k = 1 所以 k 维度可以抹去，
// 并且 dp[i-1][k-1][0] = 0， 表示不做交易，收益为 0
// 状态转移方程
// dp[i][0] = max(dp[i-1][0]，dp[i-1][1]+price[i])
// dp[i][1] = max(dp[i-1][1]，-price[i])
// 分析发现，今天的持有 dp[i][1] 和不持有 dp[i][0]，只和前一天的 dp[i-1][1] 和不持有 dp[i-1][0] 有关，可以将 2 维数组转换为常数空间。
// dp_i_0 = 0; dp_i_1 = -Infinity.
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  const n = prices.length;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;

  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
};
