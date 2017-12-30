/**
 * @param {number[]} prices
 * @return {number}
 * find the largest sum of contiguous ints in an array
 * if prices[i] less than buy, assign this value to buy and keep going. 
 * Else keep campareing balance and difference of buy and price[i].
 * time O(n) space O(1).
 */
var maxProfit = function (prices) {
  // method 1
  if (prices.length === 0) return 0;
  // var buy = prices[0],
  //     balance = 0;
  // for (i = 1; i < prices.length; ++i) {
  //     if (prices[i] < buy) {
  //         buy = prices[i];
  //     }
  //     balance = Math.max(balance, prices[i] - buy);
  // }
  // return balance;

  // method 2 Kadane's Algorithm
  var maxHere = 0,
    maxSoFar = 0;
  for (var i = 1; i < prices.length; i++) {
    // if the accumulation of difference is less than 0 ,then reset to 0
    maxHere = Math.max(0, maxHere += prices[i] - prices[i - 1]);
    maxSoFar = Math.max(maxSoFar, maxHere);
  }
  return maxSoFar;
};

console.log(maxProfit([1, 2, 1, 4, 5]));
