/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;

  let max = 0;
  let cur = 0;
  for (let i = 1; i < prices.length; i++) {
    cur += prices[i] - prices[i - 1];
    cur = Math.max(0, cur);
    max = Math.max(cur, max);
  }
  return max;
};
