/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  // 因为数组变成了环，其实转换成了三种情况
  // 如 [1,2,3,4,5,6,7]
  // 1：去掉收尾不能抢 [2,3,4,5,6]
  // 2：去掉头不抢 [2,3,4,5,6,7]
  // 3：去掉尾不抢 [1,2,3,4,5,6]
  // 只用考虑 2,3 情况，因为这两种情况选择余地更大，数字更多，
  // 由于钱是非负数，选择余地更大，决策结果不会小
  return Math.max(
    robRange(nums.slice(0, nums.length - 1)),
    robRange(nums.slice(1)),
  );
};

// 优化后，使用常数空间，只记录 i+1, i+2
function robRange(nums) {
  if (!nums.length) return 0;
  let i1 = 0;
  let i2 = 0;
  let max = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    max = Math.max(i1, nums[i] + i2);
    i2 = i1;
    i1 = max;
  }
  return max;
}
