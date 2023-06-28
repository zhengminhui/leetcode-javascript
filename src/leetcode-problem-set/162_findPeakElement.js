/**
 * @param {number[]} nums
 * @return {number}
 */
// 极左，极右都是无穷小
// 左<=右, 继续向右搜寻
// 左>右, 左为峰值
// 返回任意一个峰就可以。
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    // 比右边小，继续向右边搜索
    if (nums[mid] <= nums[mid + 1]) {
      left = mid + 1;
    } else if (nums[mid] > nums[mid + 1]) {
      right = mid;
    }
  }

  return right;
};
