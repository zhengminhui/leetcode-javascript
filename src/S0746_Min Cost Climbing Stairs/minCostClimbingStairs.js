/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length <= 2) return Math.min.apply(null, cost);

  const len = cost.length;
  const dp = cost.slice();
  let i = 2;

  while (i < len) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    i++;
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};
