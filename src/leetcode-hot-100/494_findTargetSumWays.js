/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 算数推导
// sumA - sumB = target;
// sumA = target + sumB;
// sumA + sumA = target + sumB + sumA;
// 2*sumA = target + sum(nums);
// sumA = (target + sum(nums)) / 2
// 类似另一道题，是否可以找到一个子集等于另一个子集 416. 分割等和子集
// 状态转移方程
// dp[j] = x
// 凑成当前背包容量 j，有 x 种方法
var findTargetSumWays = function (nums, target) {
  const sums = nums.reduce((a, b) => a + b);
  // 如果sums 小于 正target，全加上也不够
  // 如果 sums 小于 负 target，全减去也不够
  // 如果 target + sums 是奇数，除于二得 0.5，整数无法凑出小数。
  // 这三种直接返回 0
  if (sums < Math.abs(target) || (target + sums) % 2) return 0;
  return subset(nums, (target + sums) / 2);
};

function subset(nums, target) {
  const dp = new Array(target + 1).fill(0);
  // 凑成 0 ，有一种方法。
  dp[0] = 1;
  // 对每个钱币开始遍历
  for (const num of nums) {
    // 从 target 往小开始加
    // 凑成 j 块钱的方法，等于，不用 num 这枚硬币（dp[j]），
    // 和用这枚硬币，dp[j - num] 的和
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] + dp[j - num];
    }
  }
  console.log(dp);
  return dp[target];
}

const nums = [1, 1, 1, 1, 1];
const target = 3;
console.log(findTargetSumWays(nums, target));
