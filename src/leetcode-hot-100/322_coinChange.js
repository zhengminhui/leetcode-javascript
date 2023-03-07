/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const MAX = amount + 1;
  const dp = new Array(MAX).fill(MAX);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      // target 比 coin 小，如 3 对 5 块硬币
      if (i < coin) {
        continue;
      }
      // 计算 i = 3 块的时候，取决于 3 - 1， 和 3-2 的最小值
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  // 如果最后的值没有修改，说明不存在解
  return dp[amount] === MAX ? -1 : dp[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeRecur = function (coins, amount) {
  const memo = new Array(amount + 1);

  function dp(coins, amount) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (memo[amount] !== undefined) return memo[amount];

    let res = Infinity;
    for (const coin of coins) {
      const diff = amount - coin;
      const subProblem = dp(coins, diff);
      // 漏了这句，如果子问题无解，就不用进行 res 的比较。
      if (subProblem === -1) continue;
      // 1 + subProblem 表示在子问题之前，已经拿取了一枚硬币。
      res = Math.min(res, 1 + subProblem);
    }
    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  }
  return dp(coins, amount);
};
