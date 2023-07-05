/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// 和股票 4 一样，把 k 改为 2。
var maxProfit = function (prices) {
  const n = prices.length;
  if (!n) return 0;

  const k = 2;
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
