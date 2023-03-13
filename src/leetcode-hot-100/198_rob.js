/**
 * @param {number[]} nums
 * @return {number}
 */
// 仔细观察，只和 dp[i+1] 和 dp[i+2] 有关，
// 可以不用数组，改为 space O（1）
var rob = function (nums) {
  if (!nums.length) return 0;

  const len = nums.length;
  // 给 dp 的最后多补两位 0，这样方便计算（画图理解）
  const dp = new Array(len + 2).fill(0);
  // 从尾向前推，dp[i]= x ，从第 i 间房子抢，最多能抢到 x 块
  // 前面一直没下手，能抢到的钱是 0
  dp[len] = 0;
  for (let i = len - 1; i >= 0; i--) {
    // 抢了前面一家，就不能抢当前
    // 不抢前面一家，就可以算上当前
    dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2]);
  }
  return dp[0];
};
