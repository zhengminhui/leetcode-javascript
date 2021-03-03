/**
 * @param {number[]} prices
 * @return {number}
 * time O(n) space O(1)
 * find the largest sum of contiguous difference.
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let balance = 0;
  for (let i = 1; i < prices.length; i++) {
    balance += Math.max(0, prices[i] - prices[i - 1]);
  }
  return balance;
};
