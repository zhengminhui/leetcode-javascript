/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (!nums.length) return nums;

  const res = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] + nums[i];
  }
  return res;
};
