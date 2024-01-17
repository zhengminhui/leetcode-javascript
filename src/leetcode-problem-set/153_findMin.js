/**
 * @param {number[]} nums
 * @return {number}
 */
// note0529：找最小值，就是找拐点处
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    // 如果中间值比右边高，说明拐点在 mid-right 线段中，所以排除左侧
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      // 如果中间值比左边高，说明左边单调增，继续往左查找，所以排除右侧
      high = mid;
    }
  }
  return nums[low];
};
