/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const len = coins.length;
  // 生成 dp 数组，记录从 1,2,3...到 amount 的方法, 用 0 填充
  const dp = new Array(amount + 1).fill(0);
  // 无论 i（哪种硬币），凑成 0 块钱，只有 1 种方式。
  dp[0] = 1;

  for (const coin of coins) {
    for (let amt = 1; amt <= amount; amt++) {
      if (amt >= coin) {
        // 注意外层的 for-of， 会重复写入 dp[i]，直到把所有的币种的情况都加上。
        dp[amt] = dp[amt] + dp[amt - coin];
      }
    }
  }
  return dp[amount];
};
