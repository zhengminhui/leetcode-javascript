/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 滑动窗口，刚开始想简单了，把每个窗口的和都算了一遍，会超时。
// 每次只计算减左加右就可以了。
var findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b);
  let max = sum;
  for (let i = 1; i <= nums.length - k; i++) {
    sum = sum - nums[i - 1] + nums[i + k - 1];
    max = Math.max(sum, max);
  }
  return max / k;
};
