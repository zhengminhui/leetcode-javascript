/**
 * @param {number[]} prices
 * @return {number}
 * find the largest sum of contiguous ints in an array
 * if prices[i] less than buy, assign this value to buy and keep going.
 * Else keep campareing balance and difference of buy and price[i].
 * time O(n) space O(1).
 */
var maxProfit = function(prices) {
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
  var maxLocal = 0;
  var maxGlobal = 0;
  for (var i = 1; i < prices.length; i++) {
    maxLocal = Math.max(0, (maxLocal += prices[i] - prices[i - 1]));
    maxGlobal = Math.max(maxLocal, maxGlobal);
  }
  return maxGlobal;
};
