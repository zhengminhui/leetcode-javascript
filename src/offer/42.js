/**
 * @param {number[]} nums
 * @return {number}
 * 一个值记录最大值，一个值记录当前值
 * 当前值负责判断是继续累加，还是另起炉灶
 */
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0;
  }
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    sum = Math.max(cur, sum + cur);
    max = Math.max(max, sum);
  }
  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
