/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法，注意 target 在两端的情况。
// 判断条件是 left < right
// 右端点不会被取到，左闭右开区间，mid 不用减 1
var searchInsert = function (nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let mid;
  if (target < nums[0]) return 0;
  if (target > nums[right]) return len;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid;
    } else if (target === nums[mid]) {
      return mid;
    }
  }

  return left;
};
