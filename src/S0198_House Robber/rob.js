/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length <= 2) return Math.max.apply(null, nums);

  let start = nums[0];
  let max = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const tmp = max;
    max = Math.max(nums[i] + start, max);
    start = tmp;
  }
  return max;
};
