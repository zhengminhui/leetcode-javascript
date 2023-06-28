/**
 * @param {number[]} nums
 * @return {number}
 */
// 仔细观察，只和 dp[i+1] 和 dp[i+2] 有关，
// 抢了前面一家，就不能抢当前
// 不抢前面一家，就可以算上当前
var rob = function (nums) {
  if (!nums.length) return 0;
  // 给 nums 头插入两个 0，方便 dp 数组计算。
  nums.unshift(0, 0);
  const dp = new Array(nums.length).fill(0);
  // i = 2 才是nums 的开始。
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};
