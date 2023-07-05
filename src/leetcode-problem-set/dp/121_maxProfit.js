/**
 * @param {number[]} prices
 * @return {number}
 */
// 0516note:之前写的太复杂了。
// 今天的情况只有两种，今天没有股票 dp_0，今天手里有股票 dp_1
// 如果今天继续没股票 dp_0 = max(昨天就没有； 昨天手里有，今天卖掉，拿到收益，dp_1+price[i]）
// 如果今天手里还有股票 dp_1 = max(昨天就有； 昨天没有，今天买了新的股票, 0-price[i])
// 初始状况:没股票 dp_0 = 0, 有股票，给一个不可能的最小值 -infinity
// 最后肯定是手里没股票出清了收益大，所以返回 dp_0;
var maxProfit = function (prices) {
  if (!prices.length) return 0;

  let dp_0 = 0;
  let dp_1 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, 0 - prices[i]);
  }
  return dp_0;
};
