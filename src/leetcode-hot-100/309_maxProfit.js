/**
 * @param {number[]} prices
 * @return {number}
 */
// 状态转移方程
// dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
// dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i])
// 压缩成常数空间
// dp_i_0 = 0; dp_i_1 = -Infinity; dp_pre_0 = 0;
// 注意前天不持股的值，需要在遍历是用 temp 保存。
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let dp_pre_0 = 0;

  for (let i = 0; i < prices.length; i++) {
    // 把昨天不持股的状态记下来。
    const temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i]);
    // 昨天不持股的状态，在下一轮就是前天不持股的数值。
    dp_pre_0 = temp;
  }

  return dp_i_0;
};
