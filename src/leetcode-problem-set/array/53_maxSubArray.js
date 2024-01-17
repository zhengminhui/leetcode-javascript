/**
 * @param {number[]} nums
 * @return {number}
 */
// 两步比较
// 1 sum：当前数，前和+当前数
// 2 max：当前 sum 和 之前的最大
var maxSubArray = function (nums) {
  if (!nums.length) return 0;

  // max 是全局的最大值
  let max = nums[0];
  // sum 是遍历到当前的加和,累加
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 如果 sum 加当前数更小了，说明不应该加，直接用当前数重置
    // 如果 sum 加当前数更大了，说明找对了，继续向后
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};
