/**
 * @param {number[]} nums
 * @return {number}
 */
//  极左，极右都是无穷小
//  左<=右, 继续向右搜寻
//  左>右, 左为峰值
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] <= nums[mid + 1]) {
      left = mid + 1;
    } else if (nums[mid] > nums[mid + 1]) {
      right = mid;
    }
  }

  return right;
};
