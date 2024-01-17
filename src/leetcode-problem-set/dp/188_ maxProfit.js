/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// 三个动作，买，卖，hold
// dp[i][k][0|1] 表示当前格子的收益
// 天数，交易次数，是否持股,0不持股
// 找最后一天 dp[n-1][k][0] 的最大值。卖掉股票的收益比持股的更高，所以最后是 0.
// 状态转移方程分两种情况
// 1 我今天没有持有股票
// dp[i][k][0] = max(今天选择休息，    今天选择卖掉)
// dp[i][k][0] = max(dp[i-1][k][0]，dp[i-1][k][1]+price[i])
// 2 今天持有了股票
// dp[i][k][1] = max(今天选择休息，    今天选择买股票)
// dp[i][k][1] = max(dp[i-1][k][1]，dp[i-1][k-1][0]-price[i])
// base case
// dp[-1][k][0] = 0 还没开始时，收益是 0
// dp[-1][k][1] = -1 还没开始时，不会持有股票，收益给个最小值，方便找最大值。
// dp[i][0][0] = 0 交易最大次数为 0，收益也是 0
// dp[i][0][1] = -1 不允许交易，不会持有股票，收益给个最小值，方便找最大值。
// base case：
// dp[-1][...][0] = dp[...][0][0] = 0
// dp[-1][...][1] = dp[...][0][1] = -infinity
var maxProfit = function (k, prices) {
  const n = prices.length;
  if (!n) return 0;

  // 如果 k 大于数组长度的一半，说明你至多可以一半日子买，一半日子卖，等同于第二题。
  // 不考虑当天买卖的情况，收益为 0
  if (k >= n / 2) {
    // 交易次数 k 没有限制的情况
    return maxProfit_k_inf(prices);
  }
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    // j 是次数，从 0 开始到 k 次。
    for (let j = 0; j <= k; j++) {
      dp[i][j] = [0, -Infinity];
    }
  }

  for (let i = 0; i < n; i++) {
    // j 最少进行 1 次交易，最多 k 次。0 次没有意义。
    for (let j = k; j >= 1; j--) {
      if (i === 0) {
        // 处理 i = 0 第一天时的 base case
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      // 状态转移方程
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }

  return dp[n - 1][k][0];
};

var maxProfit_k_inf = function (prices) {
  if (!prices.length) return 0;
  let dp_0 = 0;
  let dp_1 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, dp_0 - prices[i]);
  }
  return dp_0;
};
