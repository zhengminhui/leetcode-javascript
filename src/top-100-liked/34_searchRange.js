/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// note0529：分别找左、右端点。
var searchRange = function (nums, target) {
  const leftBound = findLeftBound(nums, target);
  const rightBound = findRightBound(nums, target);
  return [leftBound, rightBound];
};

function findLeftBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      // 找左边界，收敛右边
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }
  return left;
}

function findRightBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] === target) {
      // 找右边界，收敛左边，左边不要了
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (right < 0 || nums[right] !== target) {
    return -1;
  }
  return right;
}
