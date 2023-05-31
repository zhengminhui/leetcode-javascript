/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 两次 2 分法: 先二分找行，如果恰好是行首数字，直接返回。再找对该行二分。
// 两个细节：
// 1. 第一次计算 mid 时，需要 bot - top + 1， 否则 3 行时，会陷入循环。
// 2. 第一次要求的是首数最小的行，所以 nums 是 matrix[top] 而不是 mid
// 二叉树法，右上角开始向下遍历。
var searchMatrix = function (matrix, target) {
  let top = 0;
  let bot = matrix.length - 1;
  let mid;
  while (top < bot) {
    mid = top + Math.floor((bot - top + 1) / 2);
    if (matrix[mid][0] <= target) {
      top = mid;
    } else {
      bot = mid - 1;
    }
  }
  const nums = matrix[top];
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return false;
};
