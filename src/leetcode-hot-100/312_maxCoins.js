/**
 * @param {number[]} nums
 * @return {number}
 */
// https://mp.weixin.qq.com/s/I0yo0XZamm-jMpG-_B3G8g
// 技巧是在 nums 首尾各添加一个 1，充当虚拟气球。
// 如果最后一个被戳破的气球是 k
// 那么 dp[i][j] = dp[i][k] + dp[k][j] + p[i]*p[k]*p[j]
var maxCoins = function (nums) {
  const dp = new Array(nums.length + 2);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(nums.length + 2).fill(0);
  }
  // 两端补充虚拟气球
  const arr = [1, ...nums, 1];
  // 只用遍历 dp 的一半，另一半是一样的，i 从下往上， j 从左往右，
  // 对角线处 i === j, eg.[1,1],[2,2]
  // j,k 从对角线的右边 1 个算起，所以 j,k 是 i+1
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < arr.length; j++) {
      // 穷举所有的“最后一个气球” k
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + arr[i] * arr[k] * arr[j],
        );
      }
    }
  }

  return dp[0][nums.length + 1];
};

const nums = [3, 1, 5, 8];
console.log(maxCoins(nums));
