/**
 * @param {number[]} prices
 * @return {number}
 * time O(n) space O(1)
 * find the largest sum of contiguous difference.
 */
// dp[i][k][0|1] 表示当天的收益，如果是买就 -prices[i]，卖就 +prices[i]
// 今天没持有 = max（昨天也没持有，昨天卖了股票）
// dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
// 今天持有了 = max（昨天就持有了，昨天买了股票）
// dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
// k 为正无穷，所以 k，k-1 是一回事，所以可以抹去 k 维度
// 状态转移方程：
// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
// dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
// 观察发现，可以将二维数组改为常数空间。
// dp_i_0 = max(dp_i_0, dp_i_1 + prices[i])
// dp_i_1 = max(dp_i_1, dp_i_0 - prices[i])
// base case
// dp_i_0 = 0； dp_i_1 = 负无穷。
// 负无穷就是说，第一天就持股，你的收益就是 -prices[0],
// 只是我们不知道 prices[0] 是多大，所以用一个最小的数来指代。
// 它只会存在一次，就会被 price[0] 更新。
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
  }
  return dp_i_0;
};
