/**
 * @param {number[]} nums
 * @return {number}
 */
//  推导公式：
// pivol 左边总和 sum; pivot 自己 nums[i],右边总和 total - nums[i] - sum;
// 要求左右相等，可以推导出 sum = total - nums[i] - sum
// 移项可得， nums[i] = total - 2sum
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur === total - 2 * sum) {
      return i;
    }
    sum += cur;
  }

  return -1;
};
