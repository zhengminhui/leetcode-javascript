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
var maxProfitDP = function (prices) {
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

/**
 * @param {number[]} prices
 * @return {number}
 * find the largest sum of contiguous ints in an array
 * if prices[i] less than buy, assign this value to buy and keep going.
 * Else keep campareing balance and difference of buy and price[i].
 * time O(n) space O(1).
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  // var buy = prices[0];
  // var balance = 0;
  // for (var i = 1; i < prices.length; i++) {
  //   if (prices[i] < buy) {
  //     buy = prices[i];
  //   }
  //   balance = Math.max(balance, prices[i] - buy);
  // }
  // return balance;

  // kadane's algorithm
  let cur = 0;
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    cur = Math.max(0, (cur += prices[i] - prices[i - 1]));
    max = Math.max(cur, max);
  }
  return max;
};
