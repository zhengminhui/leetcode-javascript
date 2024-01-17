/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices.length) return 0;
  let dp_0 = 0;
  let dp_1 = -Infinity;
  let dp_pre_0 = 0;

  for (let i = 0; i < prices.length; i++) {
    // 把昨天不持股的状态记下来。
    const temp = dp_0;
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, dp_pre_0 - prices[i]);
    // 昨天不持股的状态，在下一轮就是前天不持股的数值。
    dp_pre_0 = temp;
  }

  return dp_0;
};
