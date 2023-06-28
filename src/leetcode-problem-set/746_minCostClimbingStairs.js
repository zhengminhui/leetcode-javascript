/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (!cost || !cost.length) return 0;
  // if cost is [10, 15], return math.min
  if (cost.length <= 2) {
    return Math.min(...cost);
  }

  // dp[0] 是 0，表示 0 层没有开销
  // dp[1] 表示爬到第一层的开销。
  // 为了表示 dp[1] 是 cost 第一层，要把 dp 数组错位 1 个，所以是 cost.length + 1。
  const dp = new Array(cost.length + 1).fill(0);

  for (let i = 2; i <= cost.length; i++) {
    const pre = dp[i - 2] + cost[i - 2];
    const lat = dp[i - 1] + cost[i - 1];
    dp[i] = Math.min(pre, lat);
  }
  return dp[cost.length];
};
