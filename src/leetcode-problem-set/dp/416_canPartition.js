/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  转化为背包问题，满足背包 dp[sum / 2]
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2) return false;
  const target = sum / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    // j 需要反向遍历，因为每个数字只能使用一次，
    // 避免之前的结果影响其他结果
    // j 不用到 0， 到 cur 就可以了
    for (let j = target; j >= cur; j--) {
      if (j >= nums[i]) {
        dp[j] = dp[j] || dp[j - cur];
      }
      // 一旦 target 被满足，就不用执行另一半了。
      // 因为平均数是由总值计算而来，
      // 一半就得到了 target，另一半自然也是 target
      if (dp[target]) {
        return true;
      }
    }
  }

  return dp[target];
};

// const arr = [1, 5, 11, 5];
// const arr = [1, 6, 11, 6];
const arr = [6, 4, 2, 5, 7];
// const arr = [1, 1, 11, 1];
console.log(canPartition(arr));
