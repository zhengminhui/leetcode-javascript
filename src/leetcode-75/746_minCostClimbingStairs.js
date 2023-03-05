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

  // 走到目标台阶，没有开销，补一个 0，方便 dp 数组计算。
  cost.push(0);
  const len = cost.length;
  const dp = new Array(len).fill(0);

  // 从第 3 级台阶开始计算
  for (let i = 2; i <= len; i++) {
    // 对于第 i 台阶的开销，是由前 1 级台阶，和前 2 级台阶的值决定的。
    const pre = dp[i - 1] + cost[i - 1];
    const lat = dp[i - 2] + cost[i - 2];
    dp[i] = Math.min(pre, lat);
  }

  return dp[len];
};

const cost = [10, 15, 20];
// 10,15,20, 0
// 0, 0, 10, 15,
console.log(minCostClimbingStairs(cost));
