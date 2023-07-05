/**
 * @param {number[]} nums
 * @return {number}
 */
// Time O(n^2) Space O(n)
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  // i starts from 1, cause dp[0] is 1
  // first pointer iterate nums
  for (let i = 1; i < dp.length; i++) {
    // second pointer from start to current pointer
    for (let j = 0; j < i; j++) {
      // if current larger than previous, update the dp value
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};
