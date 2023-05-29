/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1;
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    // 左端点比中间小，说明左边是单调增，sorted
    if (nums[0] <= nums[mid]) {
      // target 在 0 到 mid 之间，排除掉右侧。
      if (nums[0] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        // target 不在 sorted 的区间内，在右侧，排除掉左侧。
        left = mid + 1;
      }
    } else if (nums[0] > nums[mid]) {
      // nums[0] 比 mid 大，说明 0- mid 间发生了旋转。拐点在线段中
      if (nums[mid] < target && target <= nums[nums.length - 1]) {
        // target 在 mid - 最右之间，排除掉左侧。
        left = mid + 1;
      } else {
        // target 在 sorted 的那边，排除掉右侧。
        right = mid - 1;
      }
    }
  }
  return -1;
};
